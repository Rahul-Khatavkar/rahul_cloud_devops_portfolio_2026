/* Edit this file to personalize every piece of portfolio content. */
const portfolioContent = {
  name: 'Rahul Khatavkar N B', shortName: 'RAHUL KHATAVKAR N B', availability: 'OPEN TO CLOUD & DEVOPS ROLES',
  intro: 'Cloud & DevOps engineer focused on building reliable, scalable, and automated infrastructure across AWS and Azure.',
  about: 'I enjoy turning manual cloud operations into repeatable systems. My work combines Infrastructure as Code, containerization, CI/CD automation, and observability to build platforms teams can operate with confidence.',
  email: 'rahulnbkhatavkar@gmail.com', location: 'BASED IN BENGALURU, INDIA',
  technologies: ['AWS', 'MICROSOFT AZURE', 'TERRAFORM', 'DOCKER', 'KUBERNETES', 'JENKINS', 'PROMETHEUS', 'GRAFANA'],
  metrics: [{value: '03', label: 'DevOps implementation projects'}, {value: '02', label: 'Cloud platforms'}, {value: '08+', label: 'Core automation tools'}],
  projects: [
    {number:'01', title:'AWS monitoring that speaks up.', text:'Configured CloudWatch Agent on Linux servers, secure IAM access, alarms, and SNS notifications for proactive infrastructure monitoring.', tags:['AWS', 'CLOUDWATCH', 'SNS', 'LINUX'], accent:'violet'},
    {number:'02', title:'Infrastructure, defined as code.', text:'Provisioned EC2, VPCs, security groups, route tables, and gateways with Terraform; visualized operational signals in Grafana and Prometheus.', tags:['TERRAFORM', 'AWS', 'PROMETHEUS', 'GRAFANA'], accent:'orange'},
    {number:'03', title:'A repeatable path to deploy.', text:'Built Jenkins and GitHub CI/CD workflows, containerized a full-stack application with Docker, and automated deployment with Kubernetes and Ansible.', tags:['JENKINS', 'DOCKER', 'KUBERNETES', 'ANSIBLE'], accent:'blue'}
  ],
  featuredProject: {
    label: 'FEATURED BUILD / RAHSPIRE',
    title: 'Rahspire — AI tools built for creators.',
    text: 'A fast, distraction-free AI platform for creators to generate YouTube titles, descriptions, captions, thumbnail titles, and hooks — powered by Google Gemini.',
    liveUrl: 'https://rahspire-web.vercel.app/',
    codeUrl: 'https://github.com/Rahul-Khatavkar/rahspire'
  },
  services: [
    {number:'01', title:'Cloud provisioning', text:'AWS and Azure environments configured with secure networking and access controls.'},
    {number:'02', title:'Infrastructure as Code', text:'Repeatable infrastructure using Terraform, Ansible, Bash, and Python.'},
    {number:'03', title:'CI/CD automation', text:'Automated build and deployment workflows with Jenkins, Git, Docker, and Kubernetes.'},
    {number:'04', title:'Monitoring & observability', text:'Operational visibility using CloudWatch, Prometheus, Grafana, alerts, and dashboards.'}
  ],
  experience: [
    {period:'Jun 2023 — NOW', role:'Cloud & DevOps Projects', company:'Self-directed implementation work', detail:'Building practical cloud infrastructure, automation, monitoring, Linux administration, and CI/CD projects.'},
    {period:'DEC 2022 — APR 2023', role:'Project Engineer Trainee', company:'Wipro Ltd, Bengaluru', detail:'Completed structured .NET and backend training; developed Internet Banking and Movie Ticket Booking projects using C# and MS SQL in a multi-tier architecture.'}
  ],
  process: [
    {number:'01', title:'Understand the goal', text:'Start with the application, infrastructure needs, and operational requirements.'},
    {number:'02', title:'Automate the foundation', text:'Define repeatable cloud resources, configuration, and delivery workflows.'},
    {number:'03', title:'Make it visible', text:'Add the metrics, alerts, and dashboards needed to operate with clarity.'},
    {number:'04', title:'Improve and document', text:'Troubleshoot, validate, and capture the patterns that make future work easier.'}
  ],
  stack: [
    {label:'Cloud', items:['AWS', 'Microsoft Azure']}, {label:'Platform', items:['Docker', 'Kubernetes', 'Linux']},
    {label:'Delivery', items:['Jenkins', 'Git', 'GitHub']}, {label:'Infrastructure', items:['Terraform', 'Ansible', 'Bash', 'Python']},
    {label:'Observability', items:['CloudWatch', 'Prometheus', 'Grafana', 'Azure Monitor']}, {label:'Security & Networking', items:['IAM', 'VPC', 'DNS', 'VPN', 'Load Balancing']}
  ],
  testimonialQuote: 'I focus on practical cloud engineering: infrastructure that is automated, observable, secure, and ready to scale with the team behind it.',
  testimonialName: 'Rahul Khatavkar N B', testimonialRole: 'Cloud & DevOps Engineer',
  socials: [
    {label:'LinkedIn', url:'https://www.linkedin.com/in/rahul-khatavkar-a8487920a/'},
    {label:'GitHub', url:'https://github.com/Rahul-Khatavkar'}
  ]
};
