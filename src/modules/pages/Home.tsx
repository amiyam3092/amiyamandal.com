import amiyaImage from '@/amiya.jpg';

export function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-6">
        <img
          src={amiyaImage}
          alt="Amiya Mandal"
          className="w-28 h-28 rounded-xl object-cover shadow-sm bg-gray-100"
          loading="eager"
        />
      </div>
      {/* <h2 className="text-3xl font-semibold tracking-tight text-[#262220]">Amiya Mandal</h2> */}
      <p className="mt-3 text-[#262220]/80">Product Manager | Curious about AI, systems, and design</p>

      <section className="mt-10">
        <h2 className="section-title text-[#262220]/60">Now</h2>
        <p className="text-[#262220]">
          Product at <a className="link text-[#262220]" href="https://www.worldpay.com/en-GB/products/payouts" target="_blank" rel="noreferrer">Worldpay</a>. Building the next gen payout products for B2B.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="section-title text-[#262220]/60">Past</h2>
        <ul className="space-y-4 text-[#262220]">
          <li>
            Built scaleable payments solutions at <a className="link text-[#262220]" href="https://wise.com/" target="_blank" rel="noreferrer">Wise</a> (ex-Transferwise).
          </li>
          <li>
            Started my career as a software engineer at <a className="link text-[#262220]" href="https://www.jpmorganchase.com/about/our-history" target="_blank" rel="noreferrer">JP Morgan Chase</a> in the Cybersecurity space, 
            transitioning to Product in the payments domain.
          </li>
          <li>
            International; lived and worked in multiple cities across Europe and Asia.
          </li>
        </ul>
      </section>
    </div>
  );
}


