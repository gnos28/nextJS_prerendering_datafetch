import Link from "next/link";
import { useState } from "react";

export default function TermsOfUse() {
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkbox) window.alert("Thanks for agreeing, enjoy your stay here");
    else window.alert("Boloss");
  };

  return (
    <>
      <h1>Terms of Use</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <form>
        <input
          id="acceptTerms"
          type="checkbox"
          onChange={() => setCheckbox(!checkbox)}
          checked={checkbox}
        />
        <label htmlFor="acceptTerms">accept terms</label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          OK
        </button>
      </form>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
