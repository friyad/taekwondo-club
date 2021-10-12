import React from 'react';
import aboutUsFemale from '../../images/aboutUs-female.jpg'
import aboutBg from '../../images/about-Us.jpg';

const AboutUs = () => {
    return (
        <div className="mt-24">
            <div className="bg-black h-96">
                <img src={aboutBg} className="w-full h-full opacity-40" alt="" />
            </div>

            <div className="mt-14">
                <div className="grid grid-cols-12 text-left w-10/12 mx-auto gap-10">
                    <div className="col-span-8">
                        <h1 className="text-4xl text-blue-900 font-bold">About Us</h1>
                        <br />
                        <p>Eius esse accusamus culpa alias unde veritatis ullam possimus, obcaecati voluptatem maiores quos cupiditate cum totam, tempore at? Distinctio blanditiis nihil natus est doloremque, eum consequuntur odit earum perspiciatis non, repudiandae harum. Voluptatibus animi similique molestiae id tenetur, neque minima sint laborum quidem exercitationem ab itaque! Ab a porro maiores provident dolor voluptate repellendus minus expedita. Minus id consequuntur vitae quia aperiam voluptas corporis laudantium nemo dolorem repellendus placeat error cumque aliquid eum cupiditate provident doloremque, deleniti quo repudiandae dolores aliquam et eveniet explicabo magnam! Facere ad voluptatem amet unde alias corrupti dolorum culpa magnam. Nostrum eaque illum possimus quas quisquam nihil maxime expedita aperiam, quae voluptatibus maiores doloremque deleniti labore facere exercitationem ipsa perspiciatis illo obcaecati repellat? Id reiciendis officiis, rerum in voluptatum similique natus ex itaque consequatur sequi ut eaque repudiandae error accusantium aspernatur nesciunt perferendis, omnis quos. Iste laudantium sapiente, numquam eligendi temporibus ex dolores quis similique id aut. Adipisci quia, praesentium obcaecati ea possimus unde atque numquam reiciendis soluta laborum voluptatum itaque sint repellendus cum at quam aliquid iste id ut dignissimos officia? Eum ex quidem quo rem qui recusandae exercitationem accusamus? Repellendus ullam harum quae rerum asperiores?</p>
                    </div>
                    <div className="col-span-4 border-4">
                        <img src={aboutUsFemale} alt="" />
                        <h1 className="text-2xl font-semibold text-center">How we provide best service?</h1>
                        <p className="mt-2 px-3 text-justify">The most important rule in providing excellent service is to be friendly. Web always try to provide greet service with a smile and always be courteous and respectful. We are proactive by paying attention to our students needs and offering help or recommendations before they ask. We know that it is important to always remain kind and empathetic to our students, even through stressful or contentious situations when students appear disappointed or angry. For the result we can provide a great service all of our students.
                        </p>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default AboutUs;