import React, { ReactNode } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAppShortcut } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";

const Service = () => {
    const data = [{
        icon: <CgWebsite className="w-10 h-10 text-primary-600 hover:scale-150 fill-blue-600" style={{color:"#2563eb"}}/>,
        title: 'Web Development',
        description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development.We specialize in creating custom websites for businesses.'
    },
    {
        icon: <MdOutlineAppShortcut className="w-10 h-10 text-primary-600 hover:scale-150 fill-blue-600" />,
        title: 'Application Development',
        description: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    },
    {
        icon: <MdOutlineDesignServices className="w-10 h-10 text-primary-600 hover:scale-150 fill-blue-600" />,
        title: 'UI/UX Design',
        description: "Build the product you need on time with an experienced team that uses a clear and effective design process."
    },
    {
        icon: <AiOutlineStock className="w-10 h-10 text-primary-600 hover:scale-150 fill-blue-600" />,
        title: "SEO Services",
        description: "SEO is one of the top online marketing technique to help your business improve its online presence, attract more traffic to its site and target qualified leads. So take your business to next level through Webralecon SEO services and drive traffic."
    },
    {
        icon: <TiSocialAtCircular className="w-10 h-10 text-primary-600 hover:scale-150 fill-blue-600" />,
        title: "Social Media Marketing",
        description: "Social media marketing (SMM) is the techniques of creating content to promote your business and products on various social media platforms such as Facebook, Instagram, and Twitter."
    },
    {
        icon: <FaIndianRupeeSign className="w-10 h-10 text-primary-600 hover:scale-150 fill-blue-600" />,
        title: "Pay per Click",
        description: "Pay per click(PPC), a Digital marketing techniques in whick advertisers pay a fee each time one of their ads is clicked. You will pay when people visit your website or to call your business."
    },


    ]
    return (
        <section id="services" className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className=" mb-8 lg:mb-16" style={{ textAlign: "center" }}>
                    <h2 className="items-center mb-4 text-4xl font-extrabold text-dark">Designed for business teams like yours</h2>
                    <p className="text-gray-900 font-medium sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {data.map(items => {
                        return (
                            <>
                                <div>

                                    <div className=" mb-6 w-5 h-5 rounded-full bg-primary-100 lg:h-5 lg:w-5">
                                        <div>{items.icon}</div>
                                    </div>
                                    <h3 className="mb-2 text-xl text-blue-600 font-bold">{items.title}</h3>
                                    <p className="text-zinc-900 font-medium">{items.description}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Service;