import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success'
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = 'Valid email is required';
    if (!data.subject.trim()) e.subject = 'Subject is required';
    if (!data.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (field, value) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    // Clear error for this field as user types
    if (errors[field]) {
      setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate(form);
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const inputClass = (field) =>
    `w-full bg-[#15173D] border rounded-lg px-4 py-3 text-[#f1e9e9] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#982598]/30 ${errors[field]
      ? 'border-red-500 focus:border-red-400'
      : 'border-[#982598]/40 focus:border-[#e491c9]'
    }`;

  const contacts = [
    { icon: '✉️', label: 'Email', value: 'info@zentomaxtech.com' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '📍', label: 'Address', value: '123 Tech Street, Innovation City' },
    { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am – 6pm IST' },
  ];

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] px-6 md:px-10 py-16 page-transition">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e491c9] mb-3 text-center animate-slideUp">Contact Us</h1>
        <p className="text-center text-[#f1e9e9]/60 mb-14 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Get in touch — we'd love to hear from you
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-slideInLeft">
            {status === 'success' && (
              <div className="mb-6 bg-green-900/40 border border-green-500/40 text-green-300 px-5 py-4 rounded-xl text-sm flex items-center gap-3">
                <span className="text-xl">✅</span>
                Message sent! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { field: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                { field: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { field: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
              ].map(({ field, label, type, placeholder }) => (
                <div key={field} className="transform transition-all duration-300 hover:translate-x-1">
                  <label className="block text-[#e491c9] font-semibold mb-2 text-sm">{label}</label>
                  <input
                    type={type}
                    value={form[field]}
                    onChange={e => handleChange(field, e.target.value)}
                    className={inputClass(field)}
                    placeholder={placeholder}
                  />
                  {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
                </div>
              ))}

              <div className="transform transition-all duration-300 hover:translate-x-1">
                <label className="block text-[#e491c9] font-semibold mb-2 text-sm">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className={`${inputClass('message')} h-36 resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition-all duration-300 px-8 py-3 rounded-xl font-semibold btn-animate transform hover:scale-105 active:scale-95 shadow-lg shadow-[#982598]/40"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slideInRight">
            <h2 className="text-2xl font-bold text-[#e491c9] mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-4">
              {contacts.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1f4f] border border-[#982598]/10 hover:border-[#982598]/40 p-5 rounded-xl transition-all duration-300 hover:translate-x-2 flex items-center gap-4"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-[#982598] font-semibold text-sm">{c.label}</p>
                    <p className="text-[#f1e9e9]/80">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#1c1f4f] border border-[#982598]/10 rounded-xl p-6">
              <h3 className="text-[#e491c9] font-bold mb-3">Response Time</h3>
              <p className="text-[#f1e9e9]/60 text-sm leading-relaxed">
                We typically respond within <strong className="text-[#f1e9e9]">24 hours</strong> on business days.
                For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
