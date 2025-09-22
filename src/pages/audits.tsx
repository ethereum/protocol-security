import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, FileText, ExternalLink } from 'lucide-react';

interface Finding {
    severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
    count: number;
}

interface Audit {
    name: string;
    auditor: string;
    auditorUrl?: string;
    logo: string;
    date: string;
    scope: string;
    findings: Finding[];
    pdfUrl?: string;
}

const audits: Audit[] = [
  {
    name: 'KZG Libraries Audit 2025',
    auditor: 'zkSecurity',
    auditorUrl: 'https://www.zksecurity.xyz',
    logo: '/images/zksec.png',
    date: 'September 2025',
    scope: 'Audit the KZG libaries for the Fusaka upgrade',
    findings: [
        {severity: 'high', count: 1},
        {severity: 'medium', count: 2},
        {severity: 'low', count: 7},
        {severity: 'info', count: 9},
    ],
    pdfUrl: '/audits/2025_KZG_Audit_Report_zkSecurity.pdf',
  },
  {
    name: 'Pectra System Contracts Bytecode',
    auditor: 'Sigma Prime',
    auditorUrl: 'https://sigmaprime.io/',
    logo: '/images/sigp.png',
    date: 'January 2025',
    scope: 'Audit the bytecode of the system contracts involved in the Pectra upgrade',
    findings: [
        {severity: 'medium', count: 1},
        {severity: 'low', count: 1},
        {severity: 'info', count: 4},
    ],
    pdfUrl: '/audits/Pectra_System_Contracts_Bytecode_Audit_Report_Sigma_Prime.pdf',
  },
  {
    name: 'Pectra System Contracts Bytecode',
    auditor: 'Plainshift',
    auditorUrl: 'https://plainshift.io/',
    logo: '/images/plainshift.svg',
    date: 'December 2024',
    scope: 'Audit the bytecode of the system contracts involved in the Pectra upgrade',
    findings: [
        {severity: 'low', count: 1},
        {severity: 'info', count: 4},
    ],
    pdfUrl: '/audits/Pectra_System_Contracts_Bytecode_Audit_Report_Plainshift.pdf',
  },
  {
    name: 'EIP 7251',
    auditor: 'Dedaub',
    auditorUrl: 'https://dedaub.com/',
    logo: '/images/dedaub.png',
    date: 'December 2024',
    scope: 'Audit the EIP 7251 implementation',
    findings: [
        { severity: 'medium', count: 1},
        { severity: 'info', count: 3}
    ],
    pdfUrl: '/audits/EIP_7251_Audit_Report_Dedaub.pdf',
  },
  {
    name: 'EIP 7002',
    auditor: 'Dedaub',
    auditorUrl: 'https://dedaub.com/',
    logo: '/images/dedaub.png',
    date: 'December 2024',
    scope: 'Audit the EIP 7002 implementation',
    findings: [
        { severity: 'medium', count: 1},
        { severity: 'info', count: 2}
    ],
    pdfUrl: '/audits/EIP_7002_Audit_Report_Dedaub.pdf',
  },
  {
    name: 'EIP 2935',
    auditor: 'Dedaub',
    auditorUrl: 'https://dedaub.com/',
    logo: '/images/dedaub.png',
    date: 'December 2024',
    scope: 'Audit the EIP 2935 implementation',
    findings: [
        { severity: 'info', count: 1}
    ],
    pdfUrl: '/audits/EIP_2935_Audit_Report_Dedaub.pdf',
  },
  {
    name: 'Pectra System Contracts Bytecode',
    auditor: 'Blackthorn',
    auditorUrl: 'https://blackthorn.xyz/',
    logo: '/images/blackthorn.png',
    date: 'December 2024',
    scope: 'Audit the bytecode of the system contracts involved in the Pectra upgrade',
    findings: [
        { severity: 'medium', count: 1},
        { severity: 'low', count: 16},
    ],
    pdfUrl: '/audits/Pectra_System_Contracts_Bytecode_Audit_Report_Blackthorn.pdf',
  },
  {
    name: 'KZG Libraries Audit 2023',
    auditor: 'Sigma Prime',
    auditorUrl: 'https://sigmaprime.io/',
    logo: '/images/sigp.png',
    date: 'June 2023',
    scope: 'Audit the KZG libaries for the Dencun upgrade',
    findings: [
        {severity: 'critical', count: 1},
        {severity: 'high', count: 2},
        {severity: 'low', count: 1},
        {severity: 'info', count: 4},
    ],
    pdfUrl: '/audits/2023_KZG_Audit_Report_Sigma_Prime.pdf',
  },
];

export default function Audits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {audits.map((audit, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all"
                >
                  <div className="flex items-center">
                    <div className="flex flex-col items-center justify-center w-12 mr-6">
                      {audit.logo && (
                        <div className="flex items-center justify-center h-full bg-black rounded-full p-2">
                          <img
                            src={`${import.meta.env.BASE_URL}${audit.logo.replace('/', '')}`}
                            alt={audit.auditor}
                            className={`w-30 h-30 object-contain mx-auto`}
                          />
                        </div>
                      )}
                    </div>

                    <div className="w-px self-stretch bg-border/60 mx-4"></div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-red-500 transition-colors mb-2">
                        {audit.name}
                      </h2>

                      <h3 className="text-xl text-muted-foreground mb-4">
                        {audit.auditorUrl ? (
                          <a
                            href={audit.auditorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-red-500 hover:underline transition-colors"
                          >
                            {audit.auditor}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        ) : (
                          audit.auditor
                        )}
                      </h3>

                      <p className="text-muted-foreground mb-6">
                        {audit.scope}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {audit.findings.map((finding, idx) => (
                          finding.count > 0 && (
                            <span
                              key={idx}
                              className={`px-3 py-1 text-sm font-medium rounded-full ${
                                finding.severity === 'critical' ? 'bg-red-900 text-red-100 dark:bg-red-900/50 dark:text-red-300' :
                                finding.severity === 'high' ? 'bg-orange-800 text-orange-100 dark:bg-orange-800/50 dark:text-orange-300' :
                                finding.severity === 'medium' ? 'bg-yellow-700 text-yellow-100 dark:bg-yellow-800/50 dark:text-yellow-300' :
                                finding.severity === 'low' ? 'bg-green-800 text-green-100 dark:bg-green-900/50 dark:text-green-300' :
                                'bg-blue-800 text-blue-100 dark:bg-blue-900/50 dark:text-blue-300'
                              }`}
                            >
                              {finding.count} {finding.severity}
                            </span>
                          )
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>Completed: {audit.date}</span>
                      </div>

                      {audit.pdfUrl && (
                        <a
                          href={`${import.meta.env.BASE_URL}${audit.pdfUrl.replace('/', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-500 hover:text-red-600 hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          View Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
