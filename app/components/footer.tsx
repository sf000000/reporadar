import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-muted-foreground">
        An open-source project by{" "}
        <Link
          target="_blank"
          className="font-medium text-primary"
          href="https://github.com/chaptrhouse"
        >
          chaptrhouse
        </Link>
      </p>
    </div>
  );
};

export default Footer;
