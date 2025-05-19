/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Star, Users, Camera,
  Menu, X, Calendar, Globe, Shield, Heart, Award,
  Facebook, Instagram, Youtube, Twitter, Send
} from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

const CapitolToursWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTourCategory, setSelectedTourCategory] = useState('All');
  const [selectedAccommodationFilter, setSelectedAccommodationFilter] = useState('All');

  const tours = [
    {
      id: 1,
      category: 'Adventure',
      name: 'Mountain Peak Explorer',
      description: 'Conquer the highest peaks with our experienced guides.',
      duration: '5 days',
      price: '₦340,999.000',
      inclusions: ['Professional guide', 'Equipment', 'Meals', 'Accommodation'],
      exclusions: ['Personal expenses', 'Travel insurance'],
      image: '/img/1.png'
    },
    {
      id: 2,
      category: 'Family',
      name: 'Heritage Family Tour',
      description: 'Perfect for families exploring cultural heritage sites.',
      duration: '3 days',
      price: '₦960,061.34',
      inclusions: ['Family guide', 'Entry tickets', 'Lunch', 'Transportation'],
      exclusions: ['Dinner', 'Personal shopping'],
      image: '/img/2.png'
    },
    {
      id: 3,
      category: 'Historical',
      name: 'Ancient Ruins Discovery',
      description: 'Journey through time visiting ancient civilizations.',
      duration: '7 days',
      price: '₦2,082,002.80',
      inclusions: ['Expert historian guide', 'All meals', 'Premium hotels', 'Transfers'],
      exclusions: ['Flights', 'Optional activities'],
      image: '/img/4.png'
    },
    {
      id: 4,
      category: 'Luxury',
      name: 'Royal Palace Experience',
      description: 'Luxurious tour of royal palaces and estates.',
      duration: '4 days',
      price: '₦3,043,666.91',
      inclusions: ['Private guide', 'Luxury accommodation', 'Gourmet meals', 'Private transport'],
      exclusions: ['Spa treatments', 'Shopping'],
      image: '/img/5.png'
    }
  ];

  const accommodations = [
    {
      id: 1,
      name: 'Grand Plaza Hotel',
      location: 'Downtown',
      rating: 5,
      price: '₦299,400/night',
      amenities: ['Pool', 'Spa', 'Restaurant', 'Gym'],
      image: '/des/1.png'
    },
    {
      id: 2,
      name: 'Comfort Inn & Suites',
      location: 'Airport District',
      rating: 4,
      price: '₦149.500/night',
      amenities: ['Free WiFi', 'Breakfast', 'Parking', 'Business Center'],
      image: '/des/2.png'
    },
    {
      id: 3,
      name: 'Boutique Heritage Stay',
      location: 'Historic Quarter',
      rating: 4,
      price: '₦350,000/night',
      amenities: ['Heritage Building', 'Rooftop Bar', 'Library', 'Garden'],
      image: '/des/3.png'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      review: 'Absolutely amazing experience! The guides were knowledgeable and the itinerary was perfect.',
      rating: 5,
      tour: 'Heritage Family Tour',
      image: '/dd/d2.png'
    },
    {
      id: 2,
      name: 'Michael Ayetola',
      review: 'Professional service and unforgettable memories. Highly recommend Capitol Tours!',
      rating: 5,
      tour: 'Mountain Peak Explorer',
      image: '/dd/d1.png'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      review: 'The luxury package exceeded our expectations. Every detail was perfectly handled.',
      rating: 5,
      tour: 'Royal Palace Experience',
      image: '/dd/d3.png'
    }
  ];

  const galleryImages = [
    { id: 1, src: '/MountainVista.png', alt: 'Mountain Vista', category: 'Adventure' },
    { id: 2, src: '/FamilyMuseum.png', alt: 'Family at Museum', category: 'Family' },
    { id: 3, src: '/AncientTemple.png', alt: 'Ancient Temple', category: 'Historical' },
    { id: 4, src: '/LuxurySuite.png', alt: 'Luxury Suite', category: 'Luxury' },
    { id: 5, src: '/GroupPhoto.png', alt: 'Group Photo', category: 'Adventure' },
    { id: 6, src: '/CulturalPerformance.png', alt: 'Cultural Performance', category: 'Family' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Essential Travel Safety Tips for International Tours',
      excerpt: 'Stay safe and enjoy your travels with these expert safety recommendations.',
      date: 'May 15, 2025',
      image: '/tt/guide.png'
    },
    {
      id: 2,
      title: 'Packing Guide: What to Bring on Adventure Tours',
      excerpt: 'Complete packing checklist for your upcoming adventure expedition.',
      date: 'May 10, 2025',
      image: '/tt/2.png'
    },
    {
      id: 3,
      title: 'Hidden Gems: Off-the-Beaten-Path Destinations',
      excerpt: 'Discover unique destinations that most tourists never see.',
      date: 'May 5, 2025',
      image: '/tt/map.png'
    }
  ];

  const filteredTours = selectedTourCategory === 'All'
    ? tours
    : tours.filter(tour => tour.category === selectedTourCategory);

  const filteredAccommodations = selectedAccommodationFilter === 'All'
    ? accommodations
    : accommodations.filter(acc => acc.location === selectedAccommodationFilter);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Capitol Hospitality – Travel & Tours</title>
        <meta name="description" content="Explore premium tours, hotels, and cultural destinations with Capitol Hospitality." />

        {/* Open Graph meta for link previews */}
        <meta property="og:title" content="Capitol Hospitality – Travel & Tours" />
        <meta property="og:description" content="Explore premium tours, hotels, and cultural destinations with Capitol Hospitality." />
        <meta property="og:image" content="/gg/1.png" /> {/* Replace with a real banner image */}
        <meta property="og:url" content="https://www.capitolhospitality.info" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">


                <div className="relative w-15 h-14">
                  <Image
                    src="/23.png"
                    alt="About Us"
                    fill
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <span className="text-xl font-bold text-gray-800">Capitol Hospitality & Tours</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600">About</button>
                <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-primary-600">Tours</button>
                <button onClick={() => scrollToSection('accommodation')} className="text-gray-700 hover:text-primary-600">Accommodation</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary-600">Gallery</button>
                <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-primary-600">Blog</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600">Contact</button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700">Home</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700">About</button>
                <button onClick={() => scrollToSection('tours')} className="block px-3 py-2 text-gray-700">Tours</button>
                <button onClick={() => scrollToSection('accommodation')} className="block px-3 py-2 text-gray-700">Accommodation</button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700">Gallery</button>
                <button onClick={() => scrollToSection('blog')} className="block px-3 py-2 text-gray-700">Blog</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700">Contact</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore. Experience. Enjoy.</h1>
              <p className="text-xl md:text-2xl mb-8">Discover the world with Capitol Hospitality & Tours - Your gateway to unforgettable adventures</p>
              <div className="space-x-4">
                <button onClick={() => scrollToSection('booking')} className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Book Now
                </button>
                <button onClick={() => scrollToSection('tours')} className="border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Explore Packages
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tours.slice(0, 3).map(tour => (
                <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary-600">{tour.price}</span>
                      <span className="text-gray-500">{tour.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Snippet */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-6 gap-4">
                    <div className="relative w-full h-48">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&quot;{testimonial.review}&quot;</p>
                  <p className="text-sm text-primary-600 mt-2">- {testimonial.tour}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Capitol Hospitality & Tours</h2>
                <p className="text-gray-600 mb-6">
                  With over 15 years of experience in the travel industry, Capitol Hospitality & Tours has been creating
                  unforgettable memories for travelers from around the world. Our passion for exploration and commitment
                  to excellence sets us apart.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-primary-600 mr-3" />
                    <span>Licensed and certified tour guides</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-primary-600 mr-3" />
                    <span>Fully insured and bonded</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-6 h-6 text-primary-600 mr-3" />
                    <span>Personalized travel experiences</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-primary-600 mr-3" />
                    <span>Expert local knowledge</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative w-full h-48">
                  <Image
                    src="/tt/pass.png"
                    alt="About Us"
                    fill
                    className="rounded-lg shadow-lg"
                  />
                </div>

              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Mission & Vision</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                  <p className="text-gray-600">
                    To provide exceptional travel experiences that exceed expectations, create lasting memories,
                    and inspire a deeper appreciation for the world&apos;s diverse cultures and natural beauty.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                  <p className="text-gray-600">
                    To be the leading provider of authentic, sustainable, and transformative travel experiences,
                    connecting people with destinations in meaningful and responsible ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tours & Packages */}
        <section id="tours" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tours & Packages</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['All', 'Adventure', 'Family', 'Historical', 'Luxury'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedTourCategory(category)}
                  className={`px-6 py-2 rounded-full transition duration-300 ₦{selectedTourCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tours Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredTours.map(tour => (
                <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">

                  <div className="relative w-full h-48">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                  </div>


                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{tour.name}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{tour.category}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Duration:</span>
                        <p className="text-gray-600">{tour.duration}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Price:</span>
                        <p className="text-2xl font-bold text-primary-600">{tour.price}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-600 mb-2">Included:</h4>
                      <ul className="text-sm text-gray-600">
                        {tour.inclusions.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-red-600 mb-2">Not Included:</h4>
                      <ul className="text-sm text-gray-600">
                        {tour.exclusions.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => scrollToSection('booking')}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded transition duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section id="accommodation" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Accommodation Partners</h2>

            {/* Filter */}
            <div className="flex justify-center gap-4 mb-8">
              {['All', 'Downtown', 'Airport District', 'Historic Quarter'].map(location => (
                <button
                  key={location}
                  onClick={() => setSelectedAccommodationFilter(location)}
                  className={`px-4 py-2 rounded transition duration-300 ₦{selectedAccommodationFilter === location
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {filteredAccommodations.map(hotel => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{hotel.name}</h3>
                      <div className="flex">
                        {[...Array(hotel.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{hotel.location}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary-600">{hotel.price}</span>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Travel Planning</h3>
                <p className="text-gray-600">Complete itinerary planning tailored to your preferences and budget.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Airport Pickup</h3>
                <p className="text-gray-600">Convenient and reliable airport transfer services for all arrivals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Business Travel</h3>
                <p className="text-gray-600">Professional travel management for corporate clients and business trips.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Custom Tours</h3>
                <p className="text-gray-600">Personalized tour experiences designed around your interests.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Camera className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Event Management</h3>
                <p className="text-gray-600">Complete planning for group events, conferences, and special occasions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Travel Insurance</h3>
                <p className="text-gray-600">Comprehensive travel insurance options for peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map(image => (
                <div
                  key={image.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-primary-600 rounded-full text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Travel Tips & Blog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>


                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <button className="text-primary-600 hover:text-blue-800 font-semibold">Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-600 mr-3" />
                    <span>+234 (803) 124-3242</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary-600 mr-3" />
                    <span>admin@capitolhospitality.info</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                    <span>26 Omo Israel Street, Alimosho District, Lagos 30240</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span>Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Facebook className="w-6 h-6 text-primary-600 cursor-pointer hover:text-blue-800" />
                    <Instagram className="w-6 h-6 text-primary-600 cursor-pointer hover:text-blue-800" />
                    <Youtube className="w-6 h-6 text-primary-600 cursor-pointer hover:text-blue-800" />
                    <Twitter className="w-6 h-6 text-primary-600 cursor-pointer hover:text-blue-800" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                  <select title='select' className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600">
                    <option value="">Select Service Interest</option>
                    <option value="adventure">Adventure Tours</option>
                    <option value="family">Family Tours</option>
                    <option value="historical">Historical Tours</option>
                    <option value="luxury">Luxury Tours</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="custom">Custom Package</option>
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded transition duration-300 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Find Us</h3>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-center">Map error!!! <br />update your plugins</span>
              </div>
            </div>
          </div>
        </section>

        {/* Booking/Reservation */}
        <section id="booking" className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Book Your Adventure</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Tour Package</label>
                    <select title='choose-tour' className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600">
                      <option value="">Choose a tour...</option>
                      {tours.map(tour => (
                        <option key={tour.id} value={tour.id}>
                          {tour.name} - {tour.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                    <select title='persons' className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600">
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Return Date (Optional)</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country of Residence</label>
                    <input
                      type="text"
                      placeholder="Country"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements or Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-primary-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-primary-600 hover:text-blue-800">Terms & Conditions</a> and <a href="#" className="text-primary-600 hover:text-blue-800">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                >
                  Submit Booking Request
                </button>
              </form>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Booking Information</h3>
                <ul className="text-sm text-primary-700 space-y-1">
                  <li>• Booking confirmation will be sent within 24 hours</li>
                  <li>• Payment can be made via credit card, bank transfer, or PayPal</li>
                  <li>• Full refund available up to 48 hours before departure</li>
                  <li>• Travel insurance is highly recommended</li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-2">What is included in the tour price?</h4>
                  <p className="text-gray-600">Tour prices include professional guide services, entrance fees, transportation during the tour, and meals as specified in each package. Accommodation and flights are separate unless explicitly mentioned.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-2">What is your cancellation policy?</h4>
                  <p className="text-gray-600">We offer full refunds for cancellations made 48+ hours before departure. Cancellations within 48 hours are subject to a 50% fee. No-shows are non-refundable.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-2">Do you provide travel insurance?</h4>
                  <p className="text-gray-600">While we strongly recommend travel insurance, it&apos;s not included in our packages. We can help connect you with trusted insurance providers.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-2">Are your tours suitable for children?</h4>
                  <p className="text-gray-600">Yes! Our Family tour packages are specifically designed for families with children. We also offer child discounts and can customize tours for different age groups.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Offers</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for exclusive deals and travel inspiration</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded font-semibold transition duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="relative w-11 h-10">
                    <Image
                      src="/23.png"
                      alt="About Us"
                      fill
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <span className="text-xl font-bold">Capitol Tours</span>
                </div>
                <p className="text-gray-300 mb-4">Your trusted partner for unforgettable travel experiences worldwide.</p>
                <div className="flex space-x-4">
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-blue-400 cursor-pointer" />
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-blue-400 cursor-pointer" />
                  <Youtube className="w-5 h-5 text-gray-300 hover:text-blue-400 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-blue-400 cursor-pointer" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white">About Us</button></li>
                  <li><button onClick={() => scrollToSection('tours')} className="text-gray-300 hover:text-white">Tours & Packages</button></li>
                  <li><button onClick={() => scrollToSection('accommodation')} className="text-gray-300 hover:text-white">Accommodation</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white">Services</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact</button></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Tour Categories</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Adventure Tours</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Family Tours</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Historical Tours</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Luxury Tours</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Custom Tours</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />+234 (803) 124-3242</p>
                  <p className="flex items-center"><Mail className="w-4 h-4 mr-2" />admin@capitolhospitality.info</p>
                  <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />26 Omo Israel Street, Alimosho District</p>
                  <p className="flex items-center"><Clock className="w-4 h-4 mr-2" />Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-700 my-8" />

            <div className="md:flex md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300">&copy; 2017 Capitol Hospitality & Tours. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Cancellation Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CapitolToursWebsite;