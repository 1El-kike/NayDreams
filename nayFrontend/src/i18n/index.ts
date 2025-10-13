import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // NavBar translations
      Home: "Home",
      Products: "Products",
      Management: "Management",
      About: "About",
      Contact: "Contact",
      Wrappers: "Wrappers",
      "Log Out": "Log Out",
      "Signed in as": "Signed in as",
      Login: "Login",
      Language: "Language",
      Navigation: "Navigation",
      Welcome: "Welcome",
      Guest: "Guest",

      // SuspensedView translations
      "Loading...": "Loading...",
      "Cargando...": "Loading...",
      "Estamos preparando todo para ti. Solo un momento...":
        "We're preparing everything for you. Just a moment...",

      // Errorpage translations
      "Página no encontrada": "Page not found",
      "Lo sentimos, la página que buscas no existe o ha sido movida. No te preocupes, te ayudamos a volver al camino correcto.":
        "Sorry, the page you're looking for doesn't exist or has been moved. Don't worry, we'll help you get back on track.",
      "Ir al inicio": "Go home",
      "Volver atrás": "Go back",

      // AuthCombinedPage translations
      "Welcome Back": "Welcome Back",
      "Create Account": "Create Account",
      "Ingresa tus credenciales para continuar":
        "Enter your credentials to continue",
      "Regístrate para comenzar tu experiencia":
        "Sign up to start your experience",
      "¿No tienes cuenta?": "Don't have an account?",
      "¿Ya tienes cuenta?": "Already have an account?",
      "Regístrate aquí": "Sign up here",
      "Inicia sesión aquí": "Log in here",
      "Donde la creatividad se encuentra con la personalización":
        "Where creativity meets personalization",
      "Únete a nuestra comunidad": "Join our community",
      "Descubre productos únicos y personalizados que reflejan tu estilo único. Crea tu cuenta y comienza tu viaje creativo con nosotros.":
        "Discover unique personalized products that reflect your unique style. Create your account and start your creative journey with us.",

      // LoginForm/RegisterForm translations
      Email: "Email",
      Password: "Password",
      "Enter your email": "Enter your email",
      "Enter your password": "Enter your password",
      "Email is required": "Email is required",
      "Password is required": "Password is required",
      "Forgot password?": "Forgot password?",
      "Enter your full name": "Enter your full name",
      "Name is required": "Name is required",
      "Confirm your password": "Confirm your password",
      "Please confirm your password": "Please confirm your password",
      "Passwords do not match": "Passwords do not match",
      "Invalid email address": "Invalid email address",
      "Password must be at least 6 characters":
        "Password must be at least 6 characters",
      Create: "Create",
      "Remember me": "Remember me",
      "Forgot Password?": "Forgot Password?",
      "Sign In": "Sign In",
      "Signing in...": "Signing in...",
      "Don't have an account?": "Don't have an account?",
      "Create one here": "Create one here",
      "Full Name": "Full Name",
      "Confirm Password": "Confirm Password",
      "I agree to the": "I agree to the",
      "Terms and Conditions": "Terms and Conditions",
      and: "and",
      "Privacy Policy": "Privacy Policy",
      "Sign Up": "Sign Up",
      "Creating account...": "Creating account...",
      "Already have an account?": "Already have an account?",
      "Sign in here": "Sign in here",

      // Footer translations
      "Footer Description": "Footer Description",
      "Quick Links": "Quick Links",
      "Home Link": "Home",
      "Products Link": "Products",
      "About Us": "About Us",
      "Contact Link": "Contact",
      "Contact Us": "Contact Us",
      "Business Hours": "Business Hours",
      "Open 24 hours": "Open 24 hours",
      Copyright: "Copyright",

      // Home page translations
      "Welcome to": "Welcome to",
      "Discover unique personalized products: custom mugs, pullovers and more. Express your style with our premium quality designs.":
        "Discover unique personalized products: custom mugs, pullovers and more. Express your style with our premium quality designs.",
      "Explore Products": "Explore Products",
      "Learn More": "Learn More",
      "Our Services": "Our Services",
      "Shipping Service": "Shipping Service",
      "Delivery throughout Lincoln": "Delivery throughout Lincoln",
      "Fast Delivery Service": "Fast Delivery Service",
      "2-3 business days": "2-3 business days",
      "Secure Service": "Secure Service",
      "Tracking included": "Tracking included",
      "Packaging Service": "Packaging Service",
      "Special care": "Special care",
      "Attention Service": "Attention Service",
      "Personalized Service": "Personalized Service",
      "Find Your Perfect Product": "Find Your Perfect Product",
      "Search through our collection of personalized mugs, pullovers and more":
        "Search through our collection of personalized mugs, pullovers and more",
      "Search products...": "Search products...",
      Search: "Search",
      "Popular searches:": "Popular searches:",
      Cup: "Cup",
      Pullovers: "Pullovers",
      Personalized: "Personalized",
      "Photo Rock": "Photo Rock",
      "Why Choose Nay Dreams?": "Why Choose Nay Dreams?",
      "Discover what makes our personalized products stand out from the rest":
        "Discover what makes our personalized products stand out from the rest",
      "Custom Design": "Custom Design",
      "Create unique products with your personal touch. Choose colors, add text, upload images and make it truly yours.":
        "Create unique products with your personal touch. Choose colors, add text, upload images and make it truly yours.",
      "Premium Quality": "Premium Quality",
      "We use only the finest materials and printing techniques to ensure your personalized items last for years to come.":
        "We use only the finest materials and printing techniques to ensure your personalized items last for years to come.",
      "Fast Delivery": "Fast Delivery",
      "Quick production and shipping times. Get your custom products delivered to your door in record time.":
        "Quick production and shipping times. Get your custom products delivered to your door in record time.",
      "Visit Our Store": "Visit Our Store",
      "Find us at our physical location. We're excited to welcome you and show you our personalized products in person.":
        "Find us at our physical location. We're excited to welcome you and show you our personalized products in person.",
      "Store Information": "Store Information",
      "Why Visit Us?": "Why Visit Us?",
      "See products in person": "See products in person",
      "Get personalized recommendations": "Get personalized recommendations",
      "Custom design consultations": "Custom design consultations",
      "Pickup your orders": "Pickup your orders",
      "Featured Products": "Featured Products",
      "Discover our most popular personalized items, loved by customers worldwide":
        "Discover our most popular personalized items, loved by customers worldwide",
      "Loading products...": "Loading products...",
      "No products available": "No products available",
      "View Details": "View Details",
      "View All Products": "View All Products",

      // Products page translations
      "Our Products": "Our Products",
      "Discover our collection of high-quality personalized products":
        "Discover our collection of high-quality personalized products",
      "Error loading products": "Error loading products",
      "Search results for": "Search results for",
      "Filter by category": "Filter by category",
      "Select a category": "Select a category",
      "To Order": "To Order",
      "See More Details": "See More Details",
      "No products available in this category":
        "No products available in this category",
      "Product not found": "Product not found",
      "The product you're looking for doesn't exist.":
        "The product you're looking for doesn't exist.",
      Stock: "Stock",
      Category: "Category",
      reviews: "reviews",
      Details: "Details",
      "About Our Store": "About Our Store",
      "Welcome to Nay Dreams, where creativity meets personalization. We specialize in creating unique, custom products that reflect your individual style and personality.":
        "Welcome to Nay Dreams, where creativity meets personalization. We specialize in creating unique, custom products that reflect your individual style and personality.",
      "Our team of skilled artisans uses premium materials and cutting-edge sublimation technology to bring your ideas to life. From personalized mugs and hoodies to custom water bottles and accessories, we offer a wide range of products that can be customized to your exact specifications.":
        "Our team of skilled artisans uses premium materials and cutting-edge sublimation technology to bring your ideas to life. From personalized mugs and hoodies to custom water bottles and accessories, we offer a wide range of products that can be customized to your exact specifications.",
      "Quality is our promise. We carefully select each material and rigorously test our printing processes to ensure that your personalized items not only look great but also stand the test of time.":
        "Quality is our promise. We carefully select each material and rigorously test our printing processes to ensure that your personalized items not only look great but also stand the test of time.",
      "Store Info": "Store Info",
      Reviews: "Reviews",
      "Write a Review": "Write a Review",
      "Success!": "Success!",
      "Review created successfully": "Review created successfully",
      Error: "Error",
      "Error creating rewiew": "Error creating rewiew",
      Rating: "Rating",
      "Your Review": "Your Review",
      "Share your thoughts about this product...":
        "Share your thoughts about this product...",
      "Submit Review": "Submit Review",
      "You need to be logged in to write a review.":
        "You need to be logged in to write a review.",
      "Customer Reviews": "Customer Reviews",
      "Related Products": "Related Products",
      "Discover more products from the same category":
        "Discover more products from the same category",
      "No related products found": "No related products found",
      "View All Products in This Category":
        "View All Products in This Category",

      // Info page translations
      "About Nay's Dreams": "About Nay's Dreams",
      "Discover how we make your personalized dreams come true":
        "Discover how we make your personalized dreams come true",
      "Our Mission": "Our Mission",
      "At Nay's Dreams, we believe that every product should tell a unique story. We specialize in creating high-quality personalized items that reflect your personality and style. From custom mugs to clothing, we turn your ideas into reality.":
        "At Nay's Dreams, we believe that every product should tell a unique story. We specialize in creating high-quality personalized items that reflect your personality and style. From custom mugs to clothing, we turn your ideas into reality.",
      "Unique and personalized designs": "Unique and personalized designs",
      "Premium quality materials": "Premium quality materials",
      "Fast and reliable delivery": "Fast and reliable delivery",
      "Our Creative Process": "Our Creative Process",
      "TWe work with you at every step of the process. From the initial concept to the final product, we ensure that every detail is perfect. We use the latest printing technologies to guarantee exceptional results.":
        "We work with you at every step of the process. From the initial concept to the final product, we ensure that every detail is perfect. We use the latest printing technologies to guarantee exceptional results.",
      "Design your idea": "Design your idea",
      "Customize the details": "Customize the details",
      "Receive your unique product": "Receive your unique product",
      "Quality that Matters": "Quality that Matters",
      "We do not compromise on quality. Each product is carefully inspected before being shipped. We use eco-friendly inks and sustainable materials to care for the environment while creating durable products.":
        "We do not compromise on quality. Each product is carefully inspected before being shipped. We use eco-friendly inks and sustainable materials to care for the environment while creating durable products.",
      Satisfaction: "Satisfaction",
      Production: "Production",
      "Ready to create something amazing?":
        "Ready to create something amazing?",
      "Contact us today and tell us about your project. We're here to help you make it a reality.":
        "Contact us today and tell us about your project. We're here to help you make it a reality.",
    },
  },
  es: {
    translation: {
      // NavBar translations
      Home: "Inicio",
      Products: "Productos",
      Management: "Gestión",
      About: "Acerca de",
      Contact: "Contacto",
      Wrappers: "Envolturas",
      "Log Out": "Cerrar Sesión",
      "Signed in as": "Conectado como",
      Login: "Iniciar Sesión",
      "Sign Up": "Registrarse",
      Language: "Idioma",
      Navigation: "Navegación",
      Welcome: "Bienvenido",
      Guest: "Invitado",

      // SuspensedView translations
      "Loading...": "Cargando...",
      "Cargando...": "Cargando...",
      "Estamos preparando todo para ti. Solo un momento...":
        "Estamos preparando todo para ti. Solo un momento...",

      // Errorpage translations
      "Página no encontrada": "Página no encontrada",
      "Lo sentimos, la página que buscas no existe o ha sido movida. No te preocupes, te ayudamos a volver al camino correcto.":
        "Lo sentimos, la página que buscas no existe o ha sido movida. No te preocupes, te ayudamos a volver al camino correcto.",
      "Ir al inicio": "Ir al inicio",
      "Volver atrás": "Volver atrás",

      // AuthCombinedPage translations
      "Welcome Back": "Bienvenido de vuelta",
      "Create Account": "Crear cuenta",
      "Ingresa tus credenciales para continuar":
        "Ingresa tus credenciales para continuar",
      "Regístrate para comenzar tu experiencia":
        "Regístrate para comenzar tu experiencia",
      "¿No tienes cuenta?": "¿No tienes cuenta?",
      "¿Ya tienes cuenta?": "¿Ya tienes cuenta?",
      "Regístrate aquí": "Regístrate aquí",
      "Inicia sesión aquí": "Inicia sesión aquí",
      "Donde la creatividad se encuentra con la personalización":
        "Donde la creatividad se encuentra con la personalización",
      "Únete a nuestra comunidad": "Únete a nuestra comunidad",
      "Descubre productos únicos y personalizados que reflejan tu estilo único. Crea tu cuenta y comienza tu viaje creativo con nosotros.":
        "Descubre productos únicos y personalizados que reflejan tu estilo único. Crea tu cuenta y comienza tu viaje creativo con nosotros.",

      // LoginForm/RegisterForm translations
      Email: "Correo electrónico",
      Password: "Contraseña",
      "Enter your email": "Ingresa tu correo electrónico",
      "Enter your password": "Ingresa tu contraseña",
      "Email is required": "El correo electrónico es obligatorio",
      "Password is required": "La contraseña es obligatoria",
      "Forgot password?": "¿Olvidaste tu contraseña?",
      "Enter your full name": "Ingresa tu nombre completo",
      "Name is required": "El nombre es obligatorio",
      "Confirm your password": "Confirma tu contraseña",
      "Please confirm your password": "Por favor confirma tu contraseña",
      "Passwords do not match": "Las contraseñas no coinciden",
      "Invalid email address": "Dirección de correo electrónico inválida",
      "Password must be at least 6 characters":
        "La contraseña debe tener al menos 6 caracteres",
      Create: "Crear",
      "Remember me": "Recuérdame",
      "Forgot Password?": "¿Olvidaste la contraseña?",
      "Sign In": "Iniciar sesión",
      "Signing in...": "Iniciando sesión...",
      "Don't have an account?": "¿No tienes cuenta?",
      "Create one here": "Crea una aquí",
      "Full Name": "Nombre completo",
      "Confirm Password": "Confirmar contraseña",
      "I agree to the": "Acepto los",
      "Terms and Conditions": "Términos y condiciones",
      and: "y",
      "Privacy Policy": "Política de privacidad",
      "Creating account...": "Creando cuenta...",
      "Already have an account?": "¿Ya tienes cuenta?",
      "Sign in here": "Inicia sesión aquí",

      // Footer translations
      "Footer Description": "Descripción del pie de página",
      "Quick Links": "Enlaces rápidos",
      "Home Link": "Inicio",
      "Products Link": "Productos",
      "About Us": "Acerca de nosotros",
      "Contact Link": "Contacto",
      "Contact Us": "Contáctanos",
      "Business Hours": "Horarios de atención",
      "Open 24 hours": "Abierto 24 horas",
      Copyright: "Derechos de autor",

      // Home page translations
      "Welcome to": "Bienvenido a",
      "Discover unique personalized products: custom mugs, pullovers and more. Express your style with our premium quality designs.":
        "Descubre productos únicos y personalizados: tazas personalizadas, sudaderas y más. Expresa tu estilo con nuestros diseños de calidad premium.",
      "Explore Products": "Explorar Productos",
      "Learn More": "Saber Más",
      "Our Services": "Nuestros Servicios",
      "Shipping Service": "Servicio de Envío",
      "Delivery throughout Lincoln": "Entrega en todo Lincoln",
      "Fast Delivery Service": "Servicio de Entrega Rápida",
      "2-3 business days": "2-3 días hábiles",
      "Secure Service": "Servicio Seguro",
      "Tracking included": "Seguimiento incluido",
      "Packaging Service": "Servicio de Empaque",
      "Special care": "Cuidado especial",
      "Attention Service": "Servicio de Atención",
      "Personalized Service": "Servicio Personalizado",
      "Find Your Perfect Product": "Encuentra Tu Producto Perfecto",
      "Search through our collection of personalized mugs, pullovers and more":
        "Busca en nuestra colección de tazas personalizadas, sudaderas y más",
      "Search products...": "Buscar productos...",
      Search: "Buscar",
      "Popular searches:": "Búsquedas populares:",
      Cup: "Taza",
      Pullovers: "Sudaderas",
      Personalized: "Personalizado",
      "Photo Rock": "Foto Roca",
      "Why Choose Nay Dreams?": "¿Por qué elegir Nay Dreams?",
      "Discover what makes our personalized products stand out from the rest":
        "Descubre qué hace que nuestros productos personalizados destaquen del resto",
      "Custom Design": "Diseño Personalizado",
      "Create unique products with your personal touch. Choose colors, add text, upload images and make it truly yours.":
        "Crea productos únicos con tu toque personal. Elige colores, agrega texto, sube imágenes y hazlo realmente tuyo.",
      "Premium Quality": "Calidad Premium",
      "We use only the finest materials and printing techniques to ensure your personalized items last for years to come.":
        "Utilizamos solo los mejores materiales y técnicas de impresión para garantizar que tus artículos personalizados duren años.",
      "Fast Delivery": "Entrega Rápida",
      "Quick production and shipping times. Get your custom products delivered to your door in record time.":
        "Tiempos rápidos de producción y envío. Recibe tus productos personalizados en tu puerta en tiempo récord.",
      "Visit Our Store": "Visita Nuestra Tienda",
      "Find us at our physical location. We're excited to welcome you and show you our personalized products in person.":
        "Encuéntranos en nuestra ubicación física. Estamos emocionados de recibirte y mostrarte nuestros productos personalizados en persona.",
      "Store Information": "Información de la Tienda",
      "Why Visit Us?": "¿Por qué visitarnos?",
      "See products in person": "Ve los productos en persona",
      "Get personalized recommendations":
        "Obtén recomendaciones personalizadas",
      "Custom design consultations": "Consultas de diseño personalizado",
      "Pickup your orders": "Recoge tus pedidos",
      "Featured Products": "Productos Destacados",
      "Discover our most popular personalized items, loved by customers worldwide":
        "Descubre nuestros artículos personalizados más populares, amados por clientes de todo el mundo",
      "Loading products...": "Cargando productos...",
      "No products available": "No hay productos disponibles",
      "View Details": "Ver Detalles",
      "View All Products": "Ver Todos los Productos",

      // Products page translations
      "Our Products": "Nuestros Productos",
      "Discover our collection of high-quality personalized products":
        "Descubre nuestra colección de productos personalizados de alta calidad",
      "Error loading products": "Error al cargar productos",
      "Search results for": "Resultados de búsqueda para",
      "Filter by category": "Filtrar por categoría",
      "Select a category": "Seleccionar una categoría",
      "To Order": "Ordenar",
      "See More Details": "Ver Más Detalles",
      "No products available in this category":
        "No hay productos disponibles en esta categoría",
      "Product not found": "Producto no encontrado",
      "The product you're looking for doesn't exist.":
        "El producto que buscas no existe.",
      Stock: "Stock",
      Category: "Categoría",
      reviews: "reseñas",
      Details: "Detalles",
      "About Our Store": "Acerca de Nuestra Tienda",
      "Welcome to Nay Dreams, where creativity meets personalization. We specialize in creating unique, custom products that reflect your individual style and personality.":
        "Bienvenido a Nay Dreams, donde la creatividad se encuentra con la personalización. Nos especializamos en crear productos únicos y personalizados que reflejan tu estilo y personalidad individual.",
      "Our team of skilled artisans uses premium materials and cutting-edge sublimation technology to bring your ideas to life. From personalized mugs and hoodies to custom water bottles and accessories, we offer a wide range of products that can be customized to your exact specifications.":
        "Nuestro equipo de artesanos calificados utiliza materiales premium y tecnología de sublimación de vanguardia para dar vida a tus ideas. Desde tazas y sudaderas personalizadas hasta botellas de agua y accesorios personalizados, ofrecemos una amplia gama de productos que se pueden personalizar según tus especificaciones exactas.",
      "Quality is our promise. We carefully select each material and rigorously test our printing processes to ensure that your personalized items not only look great but also stand the test of time.":
        "La calidad es nuestra promesa. Seleccionamos cuidadosamente cada material y probamos rigurosamente nuestros procesos de impresión para garantizar que tus artículos personalizados no solo se vean geniales, sino que también resistan el paso del tiempo.",
      "Store Info": "Información de la Tienda",
      "Address:": "Dirección:",
      "Phone:": "Teléfono:",
      "Hours:": "Horarios:",
      "Email:": "Correo electrónico:",
      Reviews: "Reseñas",
      "Write a Review": "Escribir una Reseña",
      "Success!": "¡Éxito!",
      "Review created successfully": "Reseña creada exitosamente",
      Error: "Error",
      "Error creating rewiew": "Error al crear reseña",
      Rating: "Calificación",
      "Your Review": "Tu Reseña",
      "Share your thoughts about this product...":
        "Comparte tus pensamientos sobre este producto...",
      "Submit Review": "Enviar Reseña",
      "You need to be logged in to write a review.":
        "Necesitas iniciar sesión para escribir una reseña.",
      "Customer Reviews": "Reseñas de Clientes",
      "Related Products": "Productos Relacionados",
      "Discover more products from the same category":
        "Descubre más productos de la misma categoría",
      "No related products found": "No se encontraron productos relacionados",
      "View All Products in This Category":
        "Ver Todos los Productos en Esta Categoría",

      // Info page translations
      "About Nay's Dreams": "Acerca de Nay's Dreams",
      "Discover how we make your personalized dreams come true":
        "Descubre cómo hacemos realidad tus sueños personalizados",
      "Our Mission": "Nuestra Misión",
      "At Nay's Dreams, we believe that every product should tell a unique story. We specialize in creating high-quality personalized items that reflect your personality and style. From custom mugs to clothing, we turn your ideas into reality.":
        "En Nay's Dreams, creemos que cada producto debe contar una historia única. Nos especializamos en crear artículos personalizados de alta calidad que reflejan tu personalidad y estilo. Desde tazas personalizadas hasta prendas de vestir, transformamos tus ideas en realidad.",
      "Unique and personalized designs": "Diseños únicos y personalizados",
      "Premium quality materials": "Materiales premium de calidad",
      "Fast and reliable delivery": "Entrega rápida y confiable",
      "Our Creative Process": "Nuestro Proceso Creativo",
      "We work with you at every step of the process. From the initial concept to the final product, we ensure that every detail is perfect. We use the latest printing technologies to guarantee exceptional results.":
        "Trabajamos contigo en cada paso del proceso. Desde la conceptualización inicial hasta el producto final, nos aseguramos de que cada detalle sea perfecto. Utilizamos las últimas tecnologías de impresión para garantizar resultados excepcionales.",
      "Design your idea": "Diseña tu idea",
      "Customize the details": "Personaliza los detalles",
      "Receive your unique product": "Recibe tu producto único",
      "Quality that Matters": "Calidad que Importa",
      "We do not compromise on quality. Each product is carefully inspected before being shipped. We use eco-friendly inks and sustainable materials to care for the environment while creating durable products.":
        "No comprometemos en calidad. Cada producto es inspeccionado cuidadosamente antes de ser enviado. Utilizamos tintas ecológicas y materiales sostenibles para cuidar del medio ambiente mientras creamos productos duraderos.",
      Satisfaction: "Satisfacción",
      Production: "Producción",
      "Ready to create something amazing?": "¿Listo para crear algo increíble?",
      "Contact us today and tell us about your project. We're here to help you make it a reality.":
        "Contáctanos hoy y cuéntanos sobre tu proyecto. Estamos aquí para ayudarte a hacerlo realidad.",
    },
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "es", // fallback language if detection fails
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // react already does escaping
    },
  });

export default i18n;
