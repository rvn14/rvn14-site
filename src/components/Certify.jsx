"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaImage, FaXmark } from "react-icons/fa6";

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    issued: "Issued Mar 2026",
    skills: "Networking, Network Administration, +2 skills",
    imageLink: "https://media.licdn.com/dms/image/v2/D562DAQE9R0doPkQ7tQ/profile-treasury-document-images_1280/B56Z0q4eODH0AU-/1/1774540943659?e=1779926400&v=beta&t=zypIkL5yJQ7MjNUwcnxOO-DIbWyyV_fqzWSvUzxB5Ng",
    link: "https://www.credly.com/badges/9d255a9e-7930-432d-b9b5-8f9406490f05/linked_in_profile",
  },
  {
    title: "Linux Essentials",
    issuer: "Cisco",
    issued: "Issued Mar 2026",
    skills: "Linux, Command Line, Operating Systems",
    imageLink: "https://media.licdn.com/dms/image/v2/D562DAQFjZsD__PKUnw/profile-treasury-document-images_1280/B56Zyos9mJGoAY-/1/1772356888369?e=1779926400&v=beta&t=rCqTlipnXqwl6jrnP1zlby4Q90Dp3Svf5Fv-Md6Y8lk",
    link: "https://www.credly.com/badges/c36c6520-4381-43d5-b5bc-4785c65ce2f7/linked_in_profile",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    issued: "Issued Dec 2025",
    skills: "Cybersecurity, Threat Awareness, Network Security",
    imageLink: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UZLW2MYHWL2C/CERTIFICATE_LANDING_PAGE~UZLW2MYHWL2C.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/UZLW2MYHWL2C",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    issued: "Issued Dec 2025",
    skills: "Machine Learning, Regression, Classification",
    imageLink: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~47RN9R4C9NJS/CERTIFICATE_LANDING_PAGE~47RN9R4C9NJS.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/47RN9R4C9NJS",
  },
];

const ImagePlaceholder = () => (
  <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center">
    <div className="flex size-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-lavender-100">
      <FaImage />
    </div>
    <div>
      <p className="font-general text-[11px] uppercase tracking-[0.3em] text-lavender-100/65">
        Certificate image
      </p>
    </div>
  </div>
);

const CertificationCard = ({ certification, index, onViewImage }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [credentialHoverOpacity, setCredentialHoverOpacity] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const credentialButtonRef = useRef(null);
  const canShowImage = certification.imageLink && !hasImageError;

  const handleMouseMove = (event) => {
    if (!credentialButtonRef.current) return;

    const rect = credentialButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.06 }}
      className="group relative h-full overflow-hidden rounded-md border-hsla bg-charcoal p-4 text-lavender-100 md:p-5"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lavender-500/20 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_34px)]" />

      <div className="relative flex h-full flex-col gap-5">
        <div className="flex h-28 flex-col">

          <h3 className="line-clamp-3 font-general text-base font-semibold leading-5 text-lavender-100">
            {certification.title}
          </h3>
          <p className="mt-1 line-clamp-1 font-general text-sm text-lavender-100/68">
            {certification.issuer}
          </p>
          <p className="mt-1 line-clamp-1 font-general text-sm text-lavender-100/45">
            {certification.issued}
          </p>
          <p
            className={`mt-1 line-clamp-1 font-general text-xs uppercase tracking-[0.12em] text-lavender-100/40 ${
              certification.credentialId ? "" : "invisible"
            }`}
          >
            {certification.credentialId || "Credential ID placeholder"}
          </p>
        </div>

        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          ref={credentialButtonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setCredentialHoverOpacity(1)}
          onMouseLeave={() => setCredentialHoverOpacity(0)}
          className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black/80 px-5 py-2 font-general text-xs uppercase tracking-[0.16em] text-lavender-100 transition-colors duration-300 hover:border-lavender-500/70"
          aria-label={`Open credential for ${certification.title}`}
        >
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-500"
            style={{
              opacity: credentialHoverOpacity,
              background: `radial-gradient(150px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(153, 99, 239, 0.55), transparent 70%)`,
              willChange: "opacity, background",
            }}
          />
          <span className="relative z-20 flex items-center gap-2">
            <span>credential</span>
            <FaArrowUpRightFromSquare className="text-[0.7rem]" />
          </span>
        </a>

        <p className="line-clamp-2 min-h-12 font-general text-sm leading-6 text-lavender-100/65">
          <span className="font-semibold text-lavender-100">Skills:</span>{" "}
          {certification.skills}
        </p>

        <button
          type="button"
          onClick={() => canShowImage && onViewImage(certification)}
          disabled={!canShowImage}
          className={`relative mt-auto w-full overflow-hidden rounded-md border border-dashed border-lavender-200/20 bg-black/50 text-left ${
            canShowImage ? "cursor-zoom-in" : "cursor-default"
          }`}
          aria-label={`View full image for ${certification.title}`}
        >
          <div className="absolute left-3 top-3 h-7 w-7 border-l border-t border-lavender-500/55" />
          <div className="absolute bottom-3 right-3 h-7 w-7 border-b border-r border-lavender-200/35" />

          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 py-8 text-center transition-opacity duration-500 ${
              isImageLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <ImagePlaceholder />
          </div>

          <div className="relative aspect-[16/9] min-h-32">
            {canShowImage && (
              <Image
                src={certification.imageLink}
                alt={`${certification.title} certificate`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover object-center transition-opacity duration-500 ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsImageLoaded(true)}
                onError={() => setHasImageError(true)}
              />
            )}
          </div>
        </button>
      </div>
    </motion.article>
  );
};

const Certify = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isViewerImageLoaded, setIsViewerImageLoaded] = useState(false);

  const openImageViewer = (certification) => {
    setIsViewerImageLoaded(false);
    setSelectedCertificate(certification);
  };

  const closeImageViewer = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="relative w-full bg-black pb-16 pt-8">
      <div className="container mx-auto px-2 md:px-0">

        <div className="grid gap-5 px-2 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
              index={index}
              onViewImage={openImageViewer}
            />
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-sm"
          onClick={closeImageViewer}
        >
          <button
            type="button"
            onClick={closeImageViewer}
            className="absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full border border-lavender-500/35 bg-black/80 text-lavender-100 transition-colors duration-300 hover:border-lavender-500 hover:text-lavender-500"
            aria-label="Close certificate image viewer"
          >
            <FaXmark />
          </button>

          <div
            className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-md border border-lavender-500/25 bg-black/70"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
                isViewerImageLoaded ? "opacity-0" : "opacity-100"
              }`}
            >
              <ImagePlaceholder />
            </div>

            <Image
              src={selectedCertificate.imageLink}
              alt={`${selectedCertificate.title} full certificate`}
              fill
              sizes="100vw"
              className={`object-contain transition-opacity duration-500 ${
                isViewerImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsViewerImageLoaded(true)}
            />
          </div>

          <p className="mt-4 max-w-4xl text-center font-general text-sm uppercase tracking-[0.18em] text-lavender-100/70">
            {selectedCertificate.title}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Certify;
