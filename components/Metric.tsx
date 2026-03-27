import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  value: number | string;
  title: string;
  alt: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
  imgStyle?: string;
}
const Metric = ({
  imgUrl,
  value,
  title,
  alt,
  href,
  textStyle,
  isAuthor,
  imgStyle,
}: Props) => {
  const matricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`rounded-full object-cover
     ${imgStyle}`}
      />

      <p className={`${textStyle} flex items-center gap-1`}>{value}</p>
      <span
        className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {title}
      </span>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">{matricContent}</Link>
  ) : (
    <div className="flex-center gap-1">{matricContent}</div>
  );
};

export default Metric;
