import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './chatbot.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    isCrisis?: boolean;
}

const CRISIS_KEYWORDS = [
    'suicide', 'suicidal', 'kill myself', 'end my life', 'want to die',
    'hurt myself', 'self-harm', 'self harm', 'cutting myself', 'no reason to live'
];

const CRISIS_RESPONSE = `I'm really concerned about what you're sharing. You're not alone, and there are people who want to help.

Please reach out to someone who can provide immediate support:`;

const CRISIS_HOTLINE = "National Crisis Hotline: 988 (US) • Samaritans: 116 123 (UK)";

const SYSTEM_PROMPT = `You are Dove, a warm and compassionate AI wellness companion for DovesMind Synergy - a psychological support platform.

Your role:
- Provide empathetic, supportive, and non-judgmental responses
- Help with stress management, emotional support, and mental wellness guidance
- Encourage healthy coping strategies and self-care practices
- Listen actively and validate the user's feelings

Important guidelines:
- Never provide medical diagnoses or prescribe treatments
- Always encourage users to seek professional help for serious concerns
- Be warm but maintain appropriate boundaries
- Keep responses concise and comforting (2-4 sentences typically)
- Use gentle, calming language

Remember: You're a supportive companion, not a replacement for professional therapy.`;

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi, I'm Dove 🕊️ I'm here to listen and support you. How are you feeling today?",
            sender: 'ai'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const detectCrisis = (text: string): boolean => {
        const lowerText = text.toLowerCase();
        return CRISIS_KEYWORDS.some(keyword => lowerText.includes(keyword));
    };

    const generateAIResponse = async (userMessage: string): Promise<string> => {
        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string || '';
            if (!apiKey) {
                return "I'm here to listen. To enable my full abilities, please add your Gemini API key to the .env file.";
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

            const conversationHistory = messages.slice(-6).map(msg =>
                `${msg.sender === 'user' ? 'User' : 'Dove'}: ${msg.text}`
            ).join('\n');

            const fullPrompt = `${SYSTEM_PROMPT}

Previous conversation:
${conversationHistory}

User: ${userMessage}

Dove:`;

            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            const text = response.text();

            return text?.trim() || "I'm here for you. Could you tell me more about how you're feeling?";
        } catch (error) {
            console.error('AI response error:', error);
            // Fallback response that's still warm and helpful
            return getWarmFallbackResponse(userMessage);
        }
    };

    const getWarmFallbackResponse = (userMessage: string): string => {
        const lower = userMessage.toLowerCase();
        if (lower.includes('stress') || lower.includes('anxious') || lower.includes('worried')) {
            return "It sounds like you're carrying a lot right now. Taking a moment to breathe deeply can help. What's weighing on you most?";
        }
        if (lower.includes('sad') || lower.includes('down') || lower.includes('depressed')) {
            return "I hear that you're going through a difficult time. Your feelings are valid. Would you like to talk about what's been on your mind?";
        }
        if (lower.includes('angry') || lower.includes('frustrated') || lower.includes('upset')) {
            return "It's okay to feel frustrated. Those emotions are telling you something important. What happened that's making you feel this way?";
        }
        if (lower.includes('lonely') || lower.includes('alone')) {
            return "Feeling lonely can be really hard. I'm here with you right now. What would feel most supportive for you?";
        }
        if (lower.includes('thank') || lower.includes('appreciate')) {
            return "You're so welcome. I'm glad I could be here for you. Is there anything else you'd like to talk about?";
        }
        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
            return "Hello! It's nice to connect with you. How are you feeling today?";
        }
        return "Thank you for sharing that with me. I'm here to listen. Could you tell me a bit more about what's on your mind?";
    };

    const handleSend = async () => {
        const trimmedInput = inputValue.trim();
        if (!trimmedInput || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: trimmedInput,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Check for crisis keywords first
        if (detectCrisis(trimmedInput)) {
            setTimeout(() => {
                const crisisMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: CRISIS_RESPONSE,
                    sender: 'ai',
                    isCrisis: true
                };
                setMessages(prev => [...prev, crisisMessage]);
                setIsTyping(false);
            }, 1000);
            return;
        }

        // Generate AI response
        const aiResponseText = await generateAIResponse(trimmedInput);

        const aiMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: aiResponseText,
            sender: 'ai'
        };

        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Bubble */}
            <button
                className="chatbot-bubble"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close chat' : 'Open chat with Dove'}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>

            {/* Chat Panel */}
            <div className={`chatbot-panel ${isOpen ? 'open' : ''}`} role="dialog" aria-label="Chat with Dove">
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                        </svg>
                    </div>
                    <div className="chatbot-header-text">
                        <h3 className="chatbot-header-title">Dove</h3>
                        <p className="chatbot-header-subtitle">Your wellness companion</p>
                    </div>
                    <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map(message => (
                        <div key={message.id} className={`chatbot-message ${message.sender} ${message.isCrisis ? 'crisis' : ''}`}>
                            {message.text}
                            {message.isCrisis && (
                                <span className="crisis-hotline">{CRISIS_HOTLINE}</span>
                            )}
                        </div>
                    ))}

                    {isTyping && (
                        <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="chatbot-input-area">
                    <input
                        ref={inputRef}
                        type="text"
                        className="chatbot-input"
                        placeholder="Share what's on your mind..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isTyping}
                    />
                    <button
                        className="chatbot-send"
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isTyping}
                        aria-label="Send message"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ChatBot;
