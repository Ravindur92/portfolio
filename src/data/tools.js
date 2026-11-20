import {
  SiKalilinux, SiWireshark, SiVirustotal, SiCisco, SiVirtualbox,
  SiDocker, SiPython, SiCplusplus, SiGnubash, SiJupyter,
} from 'react-icons/si'
import {
  Radar, Bug, Cpu, Binary, Terminal, Box, Fingerprint, HardDrive, KeyRound, Database,
} from 'lucide-react'

export const tools = [
  { name: 'Kali Linux', icon: SiKalilinux, color: '#5aa0c8' },
  { name: 'Wireshark', icon: SiWireshark, color: '#1ea0d6' },
  { name: 'Nmap', icon: Radar, color: '#4aa3d8' },
  { name: 'Burp Suite', icon: Bug, color: '#ff6633' },
  { name: 'Ghidra', icon: Cpu, color: '#d9534f' },
  { name: 'IDA Free', icon: Binary, color: '#e0a030' },
  { name: 'Radare2', icon: Terminal, color: '#8bc34a' },
  { name: 'VirusTotal', icon: SiVirustotal, color: '#4a63ff' },
  { name: 'Cuckoo Sandbox', icon: Box, color: '#c9a227' },
  { name: 'Autopsy', icon: Fingerprint, color: '#4aa3d8' },
  { name: 'FTK Imager', icon: HardDrive, color: '#7c8cff' },
  { name: 'Hydra', icon: KeyRound, color: '#ef4444' },
  { name: 'Packet Tracer', icon: SiCisco, color: '#1ba0d7' },
  { name: 'VirtualBox', icon: SiVirtualbox, color: '#4a90d9' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Python', icon: SiPython, color: '#4b8bbe' },
  { name: 'C++', icon: SiCplusplus, color: '#4a8fe0' },
  { name: 'Bash', icon: SiGnubash, color: '#4eaa25' },
  { name: 'SQL', icon: Database, color: '#f29111' },
  { name: 'Jupyter', icon: SiJupyter, color: '#f37626' },
]