"use client";
import React, { useState } from "react";
import { Reveal } from "./animation/Reveal"
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './globals.css'

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        // setCurrentSlide(slider.track.details.rel);
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          setLoaded(true);
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const [visible, setVisible] = useState(false);
  const handleVisibility = () => {
    setVisible(true);
  };
  const data = [{
    id: 1,
    title: "India's Leading Web and App Development Company",
    subtitile: "We are Webralecon!",
    description: "With 3000+ projects delivered and 1200+ clients served all over the globe and having 80% of customer's recommendation into web development, web designing, mobile app development, and digital marketing."
  }, {
    id: 2,
    title: "  Adding Life to Web Designs",
    subtitile: "High On Functionality & User- Experience",
    description: "Our designers create out-of-the-box web designs that would increase the conversion rate of your website. We have kept our workflow flexible, but that never deter us from our vision."
  },
  ]
  return (
    <>
      <div className="relative">
        <div
          ref={sliderRef} className="mt-10 keen-slider">
          {data.map(items => {
            return (
              <>
                <div className="keen-slider__slide">
                  <Reveal>
                    <div className="mt-16 rounded-ee-3xl text-xl bg-blue-500 md:m-2 md:p-5 md:mt-16 lg:p-5 lg:mt-16">
                      <p className="text-white font-semibold">{items.title}</p>
                    </div>
                  </Reveal>

                  <div>
                    <Reveal>
                      <p className='font-bold mt-10 text-4xl'>
                        {items.subtitile}
                      </p>
                    </Reveal>
                  </div>

                  <Reveal>
                    <p className="w-96 font-semibold text-zinc-900 mt-9">
                      {items.description}
                    </p>
                  </Reveal>
                  <Reveal>
                    <button onClick={() => {
                      window.location.replace("/#contact-form");
                      setVisible(false);
                    }} className="text-white bg-blue-500 hover:bg-blue-800 font-medium md:p-3 md:w-24 lg:w-32 sm:w-32 sm:p-3 rounded-lg text-sm lg:p-4 text-center mt-9">Get in Touch</button>
                  </Reveal>
                </div>
              </>)
          })}

          {/* <div className="keen-slider__slide">
            <Reveal>
              <div className="mt-16 rounded-ee-3xl text-xl bg-blue-500 md:m-2 md:p-5 md:mt-16 lg:p-5 lg:mt-16">
                <p className="text-white font-semibold">India&apos;s Leading Web and App Development Company</p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className='font-bold mt-10 text-6xl'>
                  We are Webralecon!
                </p>
              </Reveal>
            </div>

            <Reveal>
              <p className="w-96 font-semibold text-zinc-900 mt-9">With 3000+ projects delivered and 1200+ clients served all over the globe and having 80% of customer&apos;s recommendation into web development, web designing, mobile app development, and digital marketing.

              </p>
            </Reveal>
            <Reveal>
              <button onClick={() => {
                window.location.replace("/#contact-form");
                setVisible(false);
              }} className="text-white bg-blue-500 hover:bg-blue-800 font-medium md:p-3 md:w-24 lg:w-32 sm:w-32 sm:p-3 rounded-lg text-sm lg:p-4 text-center mt-9">Get in Touch</button>
            </Reveal>
          </div> */}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>


      {<Cards />}
      {<Services />}
      {<Testimonials />}
      {<Form />}
      {<Footer />}
    </>
  )
}
function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
