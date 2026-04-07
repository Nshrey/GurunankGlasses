export default function GoogleReviews() {
    return (
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
  
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Our Google Reviews
          </h2>
  
          <p className="text-gray-600 mb-10">
            See what our customers say about us
          </p>
  
          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
  src="https://www.google.com/maps?q=Gurunanak+Glass+Industries,+Raipur&output=embed"
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>
  
          {/* View Reviews Button */}
          <a
  href="https://maps.app.goo.gl/2jt1yNzZFeDWfquw5"
  target="_blank"
  className="inline-block mt-6 text-blue-600 hover:underline"
>
  View on Google Maps →
</a>
        </div>
      </section>
    );
  }