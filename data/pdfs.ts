export type PdfTopic = {
  slug: string;
  title: string;
  description: string;
  file: string;
};

export const pdfTopics: PdfTopic[] = [
  {
    slug: "terraform",
    title: "Terraform MCQs",
    description: "100-question Terraform practice set with explanations for state, providers, and workflows.",
    file: "/api/pdfs/Terraform_MCQs.pdf",
  },
  {
    slug: "ansible",
    title: "Ansible MCQs",
    description: "Moderate-level Ansible questions spanning playbooks, roles, inventory, and Vault usage.",
    file: "/api/pdfs/Ansible_MCQs.pdf",
  },
  {
    slug: "chef",
    title: "Chef MCQs",
    description: "Chef Infra, Policyfiles, and ecosystem scenarios to keep you sharp for configuration management.",
    file: "/api/pdfs/Chef_MCQs.pdf",
  },
  {
    slug: "puppet",
    title: "Puppet MCQs",
    description: "Puppet manifests, PuppetDB, Bolt, and node classification questions with detailed explanations.",
    file: "/api/pdfs/Puppet_MCQs.pdf",
  },
  {
    slug: "linux",
    title: "Linux MCQs",
    description: "Command-line fluency, permissions, networking, and system administration fundamentals.",
    file: "/api/pdfs/Linux_MCQs.pdf",
  },
  {
    slug: "git",
    title: "Git MCQs",
    description: "Version control concepts, commands, workflows, and troubleshooting best practices.",
    file: "/api/pdfs/Git_MCQs.pdf",
  },
  {
    slug: "ci-cd",
    title: "CI/CD MCQs",
    description: "Delivery automation, pipeline design, and DevOps tooling to power reliable releases.",
    file: "/api/pdfs/CI_CD_MCQs.pdf",
  },
  {
    slug: "docker",
    title: "Docker MCQs",
    description: "Containerization fundamentals, images, networking, and security considerations for Docker.",
    file: "/api/pdfs/Docker_MCQs.pdf",
  },
  {
    slug: "kubernetes",
    title: "Kubernetes MCQs",
    description: "Core Kubernetes objects, scheduling, networking, storage, and operations coverage.",
    file: "/api/pdfs/Kubernetes_MCQs.pdf",
  },
];
