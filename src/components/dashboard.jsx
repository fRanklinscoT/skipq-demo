import React, { useEffect } from 'react';
import Navbar from './Navbar';
import img from '../assets/tut.png';
import AOS from 'aos';
import DashboardCard from './DashboardCards';
import EnquireBtn from './Enquire';

export default function Dashboard() {

    //AOS
    useEffect(() => {
        AOS.init({ duration: 600, offset: 400 });
    }, []);

    //Dashboard content
    const dashboardContent = [
        {
            title: 'Manage Registrations',
            description: 'View and manage all your registrations in one place.',
            href: '/registrations'
        },
        {
            title: 'View Status',
            description: 'Check the status of your registrations and applications.',
            href: '/status'
        },
        {
            title: 'Upload Documents',
            description: 'Upload necessary documents for your registrations.',
            href: '/documents'
        },
        {
            title: 'Contact Support',
            description: 'Get in touch with our support team for any assistance.',
            href: '/contact'
        }
    ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="rounded-xl"
      >
        <Navbar />
        <div className="flex items-center justify-start px-4 sm:px-8 min-h-[650px]">
         <div
                className="w-full sm:w-3/4 md:w-1/2 bg-black/30 p-4 sm:p-8 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="300"
                data-aos-duration="600"
            >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white  mb-4">
              Welcome to <span className="text-yellow-600">SkipQ</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white mb-6">
              Your one-stop solution for managing your registration problems. Check the dashboard to see how we can make your day better today.
            </p>
            <button className="px-5 py-2 text-sm sm:text-base bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition duration-300">
              Explore Dashboard
            </button>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {dashboardContent.map((item, index) => (
            <DashboardCard
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
            />
        ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500 dark:text-gray-400">© 2023 SkipQ. All rights reserved.</p> 
        </div>
        <EnquireBtn />
    </div>
  );
}
