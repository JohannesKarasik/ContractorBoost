import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions and Privacy Policy | ContractorBoost',
  description:
    'Terms & Conditions, SMS Messaging Terms and Privacy Policy for ContractorBoost.',
}

const BUSINESS = 'ContractorBoost'
const EMAIL = 'info@contractorboost.io'
const PHONE = '+45 81 61 18 52'
const ADDRESS = 'Bakkesvinget 73, 4000 Roskilde, Denmark'
const PAGE_URL =
  'https://www.contractorboost.io/terms-and-conditions-and-privacy-policy'
const EFFECTIVE_DATE = 'November 27, 2026'

const H2 = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <h2
    id={id}
    className='mt-16 scroll-mt-28 border-b border-[#07111f]/10 pb-3 text-3xl font-bold text-[#07111f]'
  >
    {children}
  </h2>
)

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className='mt-8 text-xl font-semibold text-[#07111f]'>{children}</h3>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className='mt-3 leading-7 text-[#07111f]/80'>{children}</p>
)

const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul className='mt-3 list-disc space-y-2 pl-6 leading-7 text-[#07111f]/80'>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className='font-medium text-[#07111f] underline hover:opacity-70'>
    {children}
  </a>
)

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen bg-white px-6 py-16 text-[#07111f]'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='text-4xl font-bold'>
          Terms &amp; Conditions and Privacy Policy
        </h1>
        <p className='mt-4 text-[#07111f]/60'>Effective date: {EFFECTIVE_DATE}</p>

        <nav className='mt-8 flex flex-wrap gap-4'>
          <A href='#terms-of-service'>Terms &amp; Conditions</A>
          <A href='#sms-terms'>SMS Messaging Terms</A>
          <A href='#privacy-policy'>Privacy Policy</A>
        </nav>

        {/* ───────────────────────── TERMS OF SERVICE ───────────────────────── */}
        <H2 id='terms-of-service'>Terms &amp; Conditions</H2>

        <P>
          These Terms &amp; Conditions govern your use of the {BUSINESS} website
          (contractorboost.io) and the services {BUSINESS} provides. {BUSINESS}{' '}
          is a sole proprietorship registered in Denmark, located at {ADDRESS}.
          By using our website or services, you agree to these terms.
        </P>

        <H3>Our Services</H3>
        <P>
          {BUSINESS} provides digital marketing services for contractors,
          including website design and development, local SEO, CRM setup and
          automation systems. The specific scope, deliverables and pricing for
          each client are agreed in writing before work begins.
        </P>

        <H3>Payments</H3>
        <P>
          Payments are processed securely through Stripe. Fees are billed as
          agreed with each client. Unless otherwise agreed in writing, fees for
          services already performed are non-refundable.
        </P>

        <H3>Client Responsibilities</H3>
        <P>
          Results depend on how the systems we set up are used. Clients are
          responsible for providing accurate information, timely access to the
          accounts we need, and for actively using the tools and processes we
          deliver. We do not guarantee specific rankings, lead volumes or
          revenue.
        </P>

        <H3>Limitation of Liability</H3>
        <P>
          To the maximum extent permitted by law, {BUSINESS} is not liable for
          indirect or consequential losses, including lost profits, arising
          from the use of our website or services.
        </P>

        <H3>Governing Law</H3>
        <P>These terms are governed by the laws of Denmark.</P>

        {/* ───────────────────────── SMS TERMS ───────────────────────── */}
        <H2 id='sms-terms'>SMS Messaging Terms</H2>

        <H3>Program Description</H3>
        <P>
          {BUSINESS} SMS Program — transactional messages only, including
          follow-ups on inquiries submitted through our website or chat widget,
          responses to your questions, appointment and call reminders, and
          updates about services you have requested from us. We do not send
          marketing or promotional messages.
        </P>

        <H3>Consent</H3>
        <P>
          By providing your phone number through our website chat widget or
          booking calendar, you agree to receive text messages from {BUSINESS}{' '}
          at the number you provided regarding your inquiry, scheduled calls and
          the services you have requested. Consent is not a condition of
          purchase. Message frequency varies. Message and data rates may apply.
          Reply STOP to unsubscribe or HELP for help.
        </P>

        <H3>Opt-Out</H3>
        <P>
          You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo;
          in reply to any message from us. After you send the SMS message
          &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that
          you have been unsubscribed. After this, you will no longer receive SMS
          messages from us. If you want to join again, just sign up as you did
          the first time and we will start sending SMS messages to you again.
        </P>

        <H3>Re-Enrollment</H3>
        <P>
          If you opt out and want to start receiving messages again, text
          &ldquo;START&rdquo; in reply to our number and we will resume sending you
          SMS messages. Standard message and data rates may apply.
        </P>

        <H3>Help</H3>
        <P>
          If you are experiencing issues with the messaging program you can
          reply with the keyword HELP for more assistance, or you can get help
          directly at <A href={`mailto:${EMAIL}`}>{EMAIL}</A> or {PHONE}.
        </P>

        <H3>Carrier Liability</H3>
        <P>Carriers are not liable for delayed or undelivered messages.</P>

        <H3>Message Frequency and Rates</H3>
        <P>
          Message and data rates may apply. Message frequency varies. If you
          have any questions about your text plan or data plan, it is best to
          contact your wireless provider.
        </P>

        <H3>Privacy</H3>
        <P>
          If you have any questions regarding privacy, please read our privacy
          policy:{' '}
          <A href={`${PAGE_URL}#privacy-policy`}>{`${PAGE_URL}#privacy-policy`}</A>
        </P>

        <H3>Age Restriction</H3>
        <P>
          This SMS service is intended for users 18 years of age and older. By
          opting in, you confirm that you are at least 18 years old.
        </P>

        {/* ───────────────────────── PRIVACY POLICY ───────────────────────── */}
        <H2 id='privacy-policy'>Privacy Policy</H2>

        <P>
          This Privacy Policy explains how {BUSINESS} ({ADDRESS}) collects, uses
          and protects your personal information when you use our website,
          contact us, or receive SMS messages from us. We process personal data
          in accordance with the EU General Data Protection Regulation (GDPR).
        </P>

        <H3>Information We Collect</H3>
        <P>
          When you contact us through our website, chat widget or booking
          calendar, or opt in to receive SMS messages from {BUSINESS}, we
          collect the following information:
        </P>
        <UL
          items={[
            'Phone number (required for messaging)',
            'First and last name (used for personalized messaging)',
            'Email address (optional, for account communications)',
            'Any additional information you voluntarily provide, such as your message or details about your business',
          ]}
        />
        <P>
          This information is collected solely to respond to your inquiry,
          deliver the SMS messages you have consented to receive, provide our
          services and maintain a record of your consent. We retain this
          information for as long as you remain opted in or are a client, plus
          a reasonable period afterward to respond to support requests or comply
          with legal record-keeping requirements.
        </P>

        <H3>How We Use Your Information</H3>
        <UL
          items={[
            'To respond to inquiries and follow up on requests you submit',
            'To schedule and remind you of calls and appointments',
            'To deliver and manage the services you have purchased',
            'To process payments',
          ]}
        />

        <H3>SMS / Text Messaging</H3>
        <P>
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Information sharing to subcontractors
          in support services, such as customer service, is permitted. All other
          use case categories exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties.
        </P>
        <P>
          Text messaging opt-in data and consent will not be shared with any
          third parties or affiliates for marketing or promotional purposes.
          We do not sell, rent or buy personal information or leads.
        </P>

        <H3>Data Security</H3>
        <P>We protect user information through the following measures:</P>
        <UL
          items={[
            'Encryption in transit (TLS / HTTPS for all data transmission between user devices, our website, and our service providers)',
            'Access controls limiting data to authorized personnel on a need-to-know basis',
            'Secure processors including GoHighLevel (CRM and messaging platform) and Stripe (payment processing), each of which maintains industry-standard security certifications',
            'Regular review of access logs and data handling practices',
          ]}
        />
        <P>
          No system is perfectly secure, but we treat user information with the
          same care we would expect for our own.
        </P>

        <H3>Opt-Out</H3>
        <P>
          You may opt out of SMS messages at any time by replying STOP to any
          message. You will receive one final confirmation message and will not
          receive further SMS messages from us. To opt out by other means or if
          you have questions about opting out, contact us at{' '}
          <A href={`mailto:${EMAIL}`}>{EMAIL}</A> or {PHONE}.
        </P>

        <H3>Your Rights</H3>
        <P>
          You have the right to request access to, correction of, or deletion of
          your personal information, and to object to or restrict its
          processing. To make a request, contact us at{' '}
          <A href={`mailto:${EMAIL}`}>{EMAIL}</A>. You also have the right to
          lodge a complaint with the Danish Data Protection Agency
          (Datatilsynet).
        </P>

        <H3>Contact</H3>
        <P>
          For privacy questions, including questions related to our SMS
          program, contact us at <A href={`mailto:${EMAIL}`}>{EMAIL}</A> or{' '}
          {PHONE}. Our mailing address is {ADDRESS}.
        </P>
      </div>
    </main>
  )
}