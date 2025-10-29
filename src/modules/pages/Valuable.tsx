export function Valuable() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-[#262220]">My Bookmarked Posts</h1>

      <ul className="mt-8 space-y-4">
        <li>
          <a
            className="link text-[#262220]"
            href="https://a16z.com/good-product-manager-bad-product-manager/"
            target="_blank"
            rel="noreferrer"
          >
            Good Product Manager, Bad Product Manager - Ben Horowitz
          </a>
        </li>
        <li>
          <a
            className="link text-[#262220]"
            href="https://adamnash.blog/2011/12/16/be-a-great-product-leader/"
            target="_blank"
            rel="noreferrer"
          >
            Be a Great Product Leader - Adam Nash
          </a>
        </li>
      </ul>
    </div>
  );
}


