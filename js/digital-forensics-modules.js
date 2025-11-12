// Advanced Digital Forensics Modules Data
const forensicsModules = {
    "1": {
        title: "Week 1 – Foundations of Digital Forensics",
        overview: "Introduction to the fundamental principles, methodologies, and legal frameworks that govern digital forensics investigations. This week establishes the foundation for understanding evidence handling, chain of custody, and forensic best practices.",
        objectives: [
            "Understand the core principles and scope of digital forensics",
            "Learn the forensic investigation lifecycle and methodologies",
            "Master chain of custody procedures and documentation",
            "Understand legal and ethical considerations in digital investigations",
            "Familiarize with industry standards and certifications"
        ],
        tools: ["FTK Imager", "EnCase", "Autopsy", "CAINE Linux", "Documentation Templates"],
        topics: [
            "Digital forensics definition and scope",
            "Types of digital evidence",
            "Forensic investigation process (NIST framework)",
            "Chain of custody and evidence preservation",
            "Legal frameworks and admissibility of evidence",
            "Forensic lab setup and best practices"
        ],
        labs: [
            "Setting up a forensic workstation",
            "Creating and documenting chain of custody forms",
            "Identifying different types of digital evidence",
            "Basic forensic imaging practice"
        ]
    },
    "2": {
        title: "Week 2 – Evidence Acquisition & Verification",
        overview: "Deep dive into evidence acquisition techniques, imaging methodologies, and verification processes. Learn to create forensically sound copies of digital evidence while maintaining integrity and admissibility.",
        objectives: [
            "Master disk imaging and acquisition techniques",
            "Understand write-blocking and evidence preservation",
            "Learn hash verification and integrity validation",
            "Perform live vs. dead acquisition",
            "Document acquisition processes properly"
        ],
        tools: ["FTK Imager", "dd/dcfldd", "Guymager", "Write Blockers", "HashCalc", "md5sum/sha256sum"],
        topics: [
            "Forensic imaging concepts (bit-by-bit copy)",
            "Write-blocking hardware and software",
            "Hash algorithms (MD5, SHA-1, SHA-256)",
            "Live acquisition vs. dead acquisition",
            "Imaging formats (E01, AFF, raw/dd)",
            "Verification and validation techniques"
        ],
        labs: [
            "Creating forensic images using multiple tools",
            "Implementing write-blocking procedures",
            "Hash verification and comparison",
            "Live memory acquisition",
            "Documenting acquisition procedures"
        ]
    },
    "3": {
        title: "Week 3 – File System & Data Recovery",
        overview: "Comprehensive study of file systems and data recovery techniques. Learn to analyze file system structures, recover deleted files, and understand data persistence mechanisms across different platforms.",
        objectives: [
            "Understand major file system architectures (NTFS, FAT, ext4, APFS)",
            "Master file carving and recovery techniques",
            "Analyze file system metadata and artifacts",
            "Recover deleted and hidden data",
            "Understand data wiping and anti-forensics"
        ],
        tools: ["Autopsy", "Sleuth Kit", "PhotoRec", "Scalpel", "R-Studio", "TestDisk"],
        topics: [
            "File system fundamentals (FAT, NTFS, ext3/4, HFS+, APFS)",
            "Master File Table (MFT) analysis",
            "Inodes and file system journaling",
            "File carving techniques",
            "Slack space and unallocated space analysis",
            "Data recovery from damaged media"
        ],
        labs: [
            "Analyzing NTFS Master File Table",
            "Recovering deleted files from various file systems",
            "File carving exercises",
            "Examining slack space",
            "Timeline analysis using file system metadata"
        ]
    },
    "4": {
        title: "Week 4 – Windows Artifacts Analysis",
        overview: "In-depth analysis of Windows operating system artifacts critical to forensic investigations. Learn to extract and interpret registry data, event logs, prefetch files, and other Windows-specific evidence.",
        objectives: [
            "Master Windows Registry forensics",
            "Analyze Windows Event Logs",
            "Examine Prefetch, ShimCache, and AmCache",
            "Investigate user activity artifacts",
            "Understand Windows timeline reconstruction"
        ],
        tools: ["Registry Explorer", "RegRipper", "Event Log Explorer", "PECmd", "JumpList Explorer", "Windows File Analyzer"],
        topics: [
            "Windows Registry structure and hives",
            "User activity tracking (UserAssist, RecentDocs, MRU lists)",
            "Windows Event Logs (Security, System, Application)",
            "Prefetch files and application execution",
            "ShimCache and AmCache analysis",
            "Volume Shadow Copies",
            "Windows 10/11 timeline and activities cache"
        ],
        labs: [
            "Registry analysis for user profiling",
            "Event log correlation and analysis",
            "Prefetch file parsing",
            "ShimCache timeline creation",
            "Volume Shadow Copy extraction",
            "Windows timeline reconstruction exercise"
        ]
    },
    "5": {
        title: "Week 5 – Linux & macOS Forensics",
        overview: "Forensic analysis of Unix-based systems including Linux and macOS. Learn to examine system logs, user artifacts, and platform-specific evidence sources unique to these operating systems.",
        objectives: [
            "Understand Linux file system forensics",
            "Analyze system and application logs",
            "Examine macOS-specific artifacts",
            "Investigate user activity on Unix systems",
            "Master command-line forensic tools"
        ],
        tools: ["Autopsy", "log2timeline/Plaso", "TSK", "mac_apt", "FSEventsParser", "UnifiedLogReader"],
        topics: [
            "Linux file systems (ext3/4, XFS, Btrfs)",
            "System logs (/var/log, syslog, auth.log)",
            "Bash history and shell artifacts",
            "macOS unified logs and FSEvents",
            "macOS plist files and preferences",
            "Time Machine and APFS snapshots",
            "Linux process forensics (/proc)"
        ],
        labs: [
            "Analyzing Linux system logs",
            "Bash history timeline analysis",
            "macOS unified log parsing",
            "FSEvents analysis",
            "Plist file examination",
            "Linux memory analysis basics"
        ]
    },
    "6": {
        title: "Week 6 – Memory Forensics",
        overview: "Advanced memory forensics techniques for analyzing volatile memory dumps. Learn to extract running processes, network connections, encryption keys, and malware from RAM captures.",
        objectives: [
            "Understand memory acquisition techniques",
            "Master Volatility framework",
            "Analyze running processes and DLLs",
            "Extract network connections and artifacts",
            "Detect malware and rootkits in memory"
        ],
        tools: ["Volatility 2/3", "Rekall", "WinPmem", "LiME", "Redline", "MemProcFS"],
        topics: [
            "Memory acquisition methods",
            "Memory dump formats",
            "Process analysis and DLL injection detection",
            "Network connection enumeration",
            "Registry hives in memory",
            "Malware detection in RAM",
            "Encryption key extraction",
            "Rootkit detection techniques"
        ],
        labs: [
            "Acquiring memory dumps from live systems",
            "Process listing and analysis with Volatility",
            "Network connection extraction",
            "Malware detection exercise",
            "Registry extraction from memory",
            "Timeline creation from memory artifacts"
        ]
    },
    "7": {
        title: "Week 7 – Network & Web Forensics",
        overview: "Investigation of network traffic and web-based evidence. Learn to analyze packet captures, reconstruct network sessions, and examine web browser artifacts for investigative purposes.",
        objectives: [
            "Master packet capture analysis",
            "Reconstruct network sessions and conversations",
            "Analyze web browser artifacts",
            "Investigate email and communication protocols",
            "Detect network-based attacks and intrusions"
        ],
        tools: ["Wireshark", "NetworkMiner", "Zeek/Bro", "Hindsight", "Browser History Viewer", "Email Header Analyzer"],
        topics: [
            "Packet capture and analysis (PCAP)",
            "Protocol analysis (HTTP, HTTPS, FTP, SMTP)",
            "Network session reconstruction",
            "Browser forensics (Chrome, Firefox, Edge, Safari)",
            "Cookie and cache analysis",
            "Download history and form data",
            "Email header analysis",
            "Network intrusion detection"
        ],
        labs: [
            "PCAP file analysis with Wireshark",
            "HTTP session reconstruction",
            "Browser history extraction and analysis",
            "Email forensics exercise",
            "Malicious traffic identification",
            "Network timeline creation"
        ]
    },
    "8": {
        title: "Week 8 – Mobile Forensics",
        overview: "Forensic examination of mobile devices including smartphones and tablets. Learn acquisition techniques, artifact analysis, and app-specific evidence extraction from iOS and Android platforms.",
        objectives: [
            "Understand mobile device acquisition methods",
            "Analyze iOS and Android file systems",
            "Extract and examine app data",
            "Investigate communication artifacts",
            "Bypass security mechanisms ethically"
        ],
        tools: ["Cellebrite UFED", "Oxygen Forensics", "Autopsy", "ALEAPP", "iLEAPP", "ADB", "libimobiledevice"],
        topics: [
            "Mobile acquisition types (logical, file system, physical)",
            "iOS file system and artifacts",
            "Android file system and artifacts",
            "SQLite database analysis",
            "App-specific artifacts (WhatsApp, Signal, social media)",
            "Location data and geolocation",
            "Call logs, SMS, and contacts",
            "Mobile malware detection"
        ],
        labs: [
            "Android logical acquisition",
            "iOS backup analysis",
            "SQLite database extraction and parsing",
            "WhatsApp forensics",
            "Location data mapping",
            "App artifact timeline creation"
        ]
    },
    "9": {
        title: "Week 9 – Cloud & Virtual Forensics",
        overview: "Forensic investigation in cloud and virtualized environments. Learn to acquire and analyze evidence from cloud storage, virtual machines, and containerized applications.",
        objectives: [
            "Understand cloud forensics challenges",
            "Acquire evidence from cloud platforms",
            "Analyze virtual machine artifacts",
            "Investigate container and Docker environments",
            "Handle multi-tenant and jurisdictional issues"
        ],
        tools: ["KAPE", "Velociraptor", "Cloud Storage Analyzers", "VirtualBox", "VMware Tools", "Docker Forensics Tools"],
        topics: [
            "Cloud service models (IaaS, PaaS, SaaS)",
            "Cloud evidence acquisition challenges",
            "AWS, Azure, and Google Cloud forensics",
            "Virtual machine snapshot analysis",
            "VMDK and VHD file examination",
            "Container forensics (Docker, Kubernetes)",
            "Cloud storage analysis (Dropbox, OneDrive, Google Drive)",
            "Legal and jurisdictional considerations"
        ],
        labs: [
            "Cloud storage artifact analysis",
            "Virtual machine forensic imaging",
            "VMDK file examination",
            "Docker container analysis",
            "Cloud log analysis (CloudTrail, Azure logs)",
            "Multi-cloud investigation scenario"
        ]
    },
    "10": {
        title: "Week 10 – Reporting & Legal Frameworks",
        overview: "Professional forensic reporting and understanding of legal frameworks. Learn to create comprehensive, court-admissible reports and understand the legal aspects of digital forensics.",
        objectives: [
            "Master forensic report writing",
            "Understand legal requirements for evidence",
            "Learn expert witness testimony skills",
            "Create professional documentation",
            "Understand international legal frameworks"
        ],
        tools: ["Report Templates", "Timeline Tools", "Visualization Software", "Case Management Systems"],
        topics: [
            "Forensic report structure and components",
            "Technical vs. executive summaries",
            "Evidence presentation and visualization",
            "Chain of custody documentation",
            "Legal standards and admissibility",
            "Expert witness preparation",
            "International laws and regulations (GDPR, CCPA)",
            "Court testimony best practices"
        ],
        labs: [
            "Writing a comprehensive forensic report",
            "Creating evidence timelines",
            "Preparing executive summaries",
            "Mock testimony exercise",
            "Case documentation practice",
            "Report peer review session"
        ]
    },
    "11": {
        title: "Week 11 – Capstone: CTF Challenge",
        overview: "Hands-on Capture The Flag challenge integrating all learned skills. Solve a complex, multi-faceted forensic investigation scenario requiring analysis across multiple evidence sources and platforms.",
        objectives: [
            "Apply all forensic techniques learned",
            "Solve complex multi-platform investigations",
            "Demonstrate end-to-end investigation skills",
            "Create comprehensive case reports",
            "Work under time constraints"
        ],
        tools: ["All previously learned tools", "Custom CTF platform", "Collaborative tools"],
        topics: [
            "Multi-source evidence correlation",
            "Cross-platform investigation",
            "Timeline reconstruction",
            "Incident reconstruction",
            "Root cause analysis",
            "Comprehensive reporting under pressure"
        ],
        labs: [
            "CTF Challenge: Multi-stage investigation",
            "Evidence correlation exercise",
            "Timeline creation from multiple sources",
            "Final report preparation",
            "Presentation of findings",
            "Peer review and feedback"
        ]
    },
    "12": {
        title: "Week 12 – IoT & Embedded Forensics",
        overview: "Forensic analysis of Internet of Things devices and embedded systems. Learn to extract and analyze data from smart devices, wearables, and embedded controllers.",
        objectives: [
            "Understand IoT device architectures",
            "Extract firmware and analyze embedded systems",
            "Investigate smart home devices",
            "Analyze wearable device data",
            "Understand IoT communication protocols"
        ],
        tools: ["Binwalk", "Firmware Analysis Toolkit", "JTAG/UART tools", "Logic Analyzers", "IoT Inspector"],
        topics: [
            "IoT device types and architectures",
            "Firmware extraction and analysis",
            "JTAG and UART debugging",
            "Smart home device forensics (Alexa, Google Home)",
            "Wearable forensics (Fitbit, Apple Watch)",
            "Industrial IoT and SCADA forensics",
            "IoT communication protocols (MQTT, CoAP, Zigbee)",
            "Embedded Linux forensics"
        ],
        labs: [
            "Firmware extraction from IoT devices",
            "Smart speaker forensics",
            "Wearable data analysis",
            "MQTT traffic analysis",
            "Embedded system memory dump",
            "IoT malware analysis"
        ]
    },
    "13": {
        title: "Week 13 – AI & ML in Forensics",
        overview: "Application of Artificial Intelligence and Machine Learning in digital forensics. Learn to leverage AI for automated analysis, pattern recognition, and advanced threat detection in forensic investigations.",
        objectives: [
            "Understand AI/ML applications in forensics",
            "Implement automated artifact classification",
            "Use ML for malware detection",
            "Apply AI for pattern recognition",
            "Understand limitations and challenges of AI in forensics"
        ],
        tools: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Jupyter Notebook", "Autopsy ML Plugins"],
        topics: [
            "Machine learning fundamentals for forensics",
            "Automated file classification",
            "Malware detection using ML",
            "Anomaly detection in logs and network traffic",
            "Natural Language Processing for text analysis",
            "Image and video analysis with AI",
            "Deep learning for pattern recognition",
            "Ethical considerations and bias in AI forensics"
        ],
        labs: [
            "Building a file classifier with ML",
            "Malware detection model training",
            "Log anomaly detection system",
            "Image classification for evidence categorization",
            "NLP for email and document analysis",
            "Final project: AI-assisted forensic investigation"
        ]
    }
};
