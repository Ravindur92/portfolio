import { motion } from 'framer-motion'

const focus = [
  { title: 'Malware Analysis', text: 'Static and dynamic analysis in isolated environments.' },
  { title: 'Ethical Hacking', text: 'Penetration testing fundamentals with Nmap, Burp Suite and Hydra.' },
  { title: 'Network Security', text: 'PCAP, DNS and HTTP traffic analysis.' },
  { title: 'Digital Forensics', text: 'Evidence handling and security investigation.' },
  { title: 'SOC & Incident Response', text: 'Log review, monitoring and technical reporting.' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-mono text-3xl font-bold text-white">
        <span className="text-emerald-400">&gt;</span> About me
      </h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 leading-relaxed text-gray-300"
        >
          <p>
            I'm a cybersecurity undergraduate at Edith Cowan University Sri Lanka,
            with academic experience in malware analysis, network security,
            digital forensics and security investigation.
          </p>
          <p>
            I'm comfortable working with Windows security logs, Event Viewer,
            Windows Defender and Linux system logs, and I analyse PCAP files,
            DNS and HTTP traffic. I understand SIEM concepts and the NIST
            Cybersecurity Framework, and I have worked with basic Azure and AWS
            environments.
          </p>
          <p>
            I bring analytical thinking, attention to detail and clear technical
            reporting, and I'm keen to grow in SOC operations, security
            monitoring and incident response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-5 font-mono text-sm"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-xs text-gray-500">ravindu@portfolio:~</span>
          </div>
          <p><span className="text-emerald-400">$</span> cat status.txt</p>
          <p className="mt-1 text-gray-300">
            role ......... Cybersecurity graduate
          </p>
          <p className="text-gray-300">areas ........ Forensics, Ethical Hacking</p>
          <p className="text-gray-300">also ......... Malware, Network Security</p>
          <p className="text-gray-300">location ..... Sri Lanka</p>
          <p className="mt-3">
            <span className="text-emerald-400">$</span> monitor --status
          </p>
          <p className="mt-1 flex items-center gap-2 text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            open to opportunities
          </p>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focus.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="font-semibold text-cyan-300">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}