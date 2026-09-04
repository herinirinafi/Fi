import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const quickQuestions = ['hello', 'projects', 'skills', 'contact']

export default function Chatbot() {
  const { t, lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    setMessages([{ from: 'bot', text: t.chatbot.intro }])
  }, [lang])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const getAnswer = (q) => {
    const qLower = q.toLowerCase()
    const answers = t.chatbot.answers
    if (/(bonjour|salut|hello|bonsoir)/.test(qLower)) return answers.hello
    if (/(projet|projets|project|projects)/.test(qLower)) return answers.projects
    if (/(contact|email|mail|téléphone|telephone)/.test(qLower)) return answers.contact
    if (/(compétence|competence|skill|stack|techno)/.test(qLower)) return answers.skills
    return answers.default
  }

  const handleSend = (text) => {
    if (!text.trim()) return
    setMessages(prev => [...prev, { from: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getAnswer(text) }])
    }, 800)
  }

  const quickAnswers = {
    hello: t.chatbot.answers.hello,
    projects: t.chatbot.answers.projects,
    skills: t.chatbot.answers.skills,
    contact: t.chatbot.answers.contact,
  }

  const handleQuick = (key) => {
    if (!open) return
    setMessages(prev => [...prev, { from: 'user', text: key }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: quickAnswers[key] }])
    }, 600)
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(o => !o)}
        aria-label="Chatbot"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        className="fixed bottom-6 left-5 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-accent-contrast shadow-[0_10px_30px_rgba(167,139,250,0.5)] transition-transform hover:scale-110"
      >
        {open ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-5 z-[120] flex h-[460px] w-[calc(100%-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-[20px] border border-line bg-bg shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 border-b border-line bg-soft px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-display font-bold text-accent-contrast">
                F
              </div>
              <div>
                <p className="font-semibold text-ink">{t.chatbot.title}</p>
                <p className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                  {t.chatbot.status}
                </p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="ml-auto text-muted hover:text-ink">
                <FiX size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.from === 'user'
                      ? 'bg-gradient-to-r from-accent to-accent-2 text-accent-contrast'
                      : 'glass text-ink/80'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-1.5 px-4">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="h-2 w-2 animate-bounce-dot rounded-full bg-ink/40" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-line p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuick(q)}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent transition-colors hover:bg-accent/25"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(input) }} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chatbot.placeholder}
                  className="flex-1 rounded-xl border border-line bg-bg px-4 py-2.5 text-sm text-ink placeholder-ink/30 focus:border-accent/60 focus:outline-none"
                />
                <button type="submit" aria-label="Send" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-2 text-accent-contrast">
                  <FiSend size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
