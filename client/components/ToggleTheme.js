import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${theme}.css`} />
      </Head>
      {theme === "light" ? (
        <span
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
          style={{ fontSize: "24px" }}
        >
          <Link href="/">
            <Image
              src="/images/EM_logo.webp"
              alt="Logo"
              width={100}
              height={24}
            />
          </Link>
        </span>
      ) : (
        <span
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
          style={{ fontSize: "24px" }}
        >
          <Image
            src="/images/EM_logo-1.webp"
            alt="Logo"
            width={100}
            height={24}
          />
        </span>
      )}
    </>
  );
};

export default ToggleTheme;
