import { Button, Card, CardBody, Image, Spinner, Tabs, Tab, Textarea, Snippet, addToast, Chip, ScrollShadow } from "@heroui/react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import { useReviews, useCreateReview } from "../../hooks/useReviews";
import { useAuth } from "../../auth/useAuth";
import { port } from "../../config/env";
import { useTranslation } from "react-i18next";
import type { Product } from "../../hooks/useProducts";
import { RelatedProducts } from "./RelatedProducts";

// Función para obtener todas las imágenes disponibles del producto
const getProductImages = (product: any) => {
    const images = [];
    if (product.image) images.push(product.image);
    if (product.image2) images.push(product.image2);
    if (product.image3) images.push(product.image3);
    if (product.image4) images.push(product.image4);
    if (product.image5) images.push(product.image5);
    if (product.image6) images.push(product.image6);
    if (product.image7) images.push(product.image7);
    if (product.image8) images.push(product.image8);
    return images;
};

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading, error } = useProduct(id);
    const { data: reviews = [], isLoading: reviewsLoading } = useReviews(id);
    const createReviewMutation = useCreateReview();
    const { currentUser } = useAuth();
    const { t } = useTranslation();

    const [reviewForm, setReviewForm] = useState({
        rating: 5,
        comment: ""
    });

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);

    // Obtener todas las imágenes del producto
    const productImages = product ? getProductImages(product) : [];

    // Auto-scroll effect for carousel
    useEffect(() => {
        if (productImages.length > 4 && !isAutoScrolling) {
            const interval = setInterval(() => {
                setSelectedImageIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % productImages.length;
                    // Scroll the thumbnail container to show the selected image
                    const thumbnailContainer = document.querySelector('.thumbnail-carousel');
                    if (thumbnailContainer) {
                        const selectedThumbnail = thumbnailContainer.children[nextIndex] as HTMLElement;
                        if (selectedThumbnail) {
                            selectedThumbnail.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest',
                                inline: 'center'
                            });
                        }
                    }
                    return nextIndex;
                });
            }, 5000); // Change image every 5 seconds

            return () => clearInterval(interval);
        }
    }, [productImages.length, isAutoScrolling]);

    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id || !currentUser) return;

        try {
            await createReviewMutation.mutateAsync({
                productId: parseInt(id),
                rating: reviewForm.rating,
                comment: reviewForm.comment
            });

            // Reset form
            setReviewForm({ rating: 5, comment: "" });
            addToast({
                title: t("Success!"),
                description: t("Review created successfully"),
                color: "success",
                timeout: 5000,
            });
        } catch (error: any) {
            addToast({
                title: t("Error"),
                description: error?.message as string || t("Error creating rewiew"),
                color: "danger",
                timeout: 5000,
            });
            console.error("Error creating review:", error);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
                <Spinner size="lg" color="primary" />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {t("Product not found")}
                    </h2>
                    <p className="text-gray-600">
                        {t("The product you're looking for doesn't exist.")}
                    </p>
                </motion.div>
            </div>
        );
    }

    const handleSend = (product: Product) => {

        const whatsappMessage = `Nombre Product: ${product.name}\nPrice: ${product.price}`;
        const whatsappUrl = `https://wa.me/14027700227?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    const averageRating = reviews.length > 0 ? reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / reviews.length : product.rating;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-pink-50/30 py-8 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4 group"
                    >
                        <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src={productImages[selectedImageIndex] ? `${port}${productImages[selectedImageIndex]}` : `${port}description/image(2).png`}
                                alt={product.name}
                                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {productImages.length > 1 && (
                            <div className="relative overflow-hidden">
                                <ScrollShadow
                                    hideScrollBar
                                    orientation="horizontal"
                                    onMouseEnter={() => setIsAutoScrolling(true)}
                                    onMouseLeave={() => setIsAutoScrolling(false)}
                                    onTouchStart={() => setIsAutoScrolling(true)}
                                    onTouchEnd={() => setIsAutoScrolling(false)}
                                    className="thumbnail-carousel flex gap-3 overflow-x-auto py-2 px-2 scroll-smooth"
                                >

                                    {productImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`flex-shrink-0 w-24 h-24 overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${selectedImageIndex === index ? 'ring-2 ring-pink-500 ring-offset-2 scale-110 shadow-pink-200' : 'hover:scale-105'
                                                }`}
                                            onClick={() => {
                                                setSelectedImageIndex(index);
                                                setIsAutoScrolling(true);
                                                // Scroll to center the selected image
                                                const thumbnailContainer = document.querySelector('.thumbnail-carousel');
                                                if (thumbnailContainer) {
                                                    const selectedThumbnail = thumbnailContainer.children[index] as HTMLElement;
                                                    if (selectedThumbnail) {
                                                        selectedThumbnail.scrollIntoView({
                                                            behavior: 'smooth',
                                                            block: 'nearest',
                                                            inline: 'center'
                                                        });
                                                    }
                                                }
                                                // Reset auto-scroll after user interaction
                                                setTimeout(() => setIsAutoScrolling(false), 5000);
                                            }}
                                        >
                                            <Image
                                                src={`${port}${img}`}
                                                alt={`${product.name} ${index + 1}`}
                                                className="w-full h-full object-cover aspect-square transition-transform duration-300"
                                            />
                                            {selectedImageIndex === index && (
                                                <div className="absolute inset-0 bg-pink-500/20 rounded-xl flex items-center justify-center">
                                                    <Chip
                                                        size="sm"
                                                        color="primary"
                                                        variant="solid"
                                                        className="absolute bottom-1 right-1 bg-white/90 text-pink-600 text-xs font-semibold"
                                                    >
                                                        {index + 1}
                                                    </Chip>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </ScrollShadow>
                                {/* Scroll indicators */}
                                {/*  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div> */}
                                {/* Navigation arrows for carousel */}
                                {productImages.length > 4 && (
                                    <>
                                        <button
                                            title="Previous image"
                                            aria-label="Previous image"
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-20 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                            onClick={() => {
                                                setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
                                                setIsAutoScrolling(true);
                                                setTimeout(() => setIsAutoScrolling(false), 5000);
                                            }}
                                        >
                                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            title="Next image"
                                            aria-label="Next image"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-20 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                            onClick={() => {
                                                setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
                                                setIsAutoScrolling(true);
                                                setTimeout(() => setIsAutoScrolling(false), 5000);
                                            }}
                                        >
                                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                            <CardBody className="space-y-4">
                                {/* Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-start mb-8"
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-4">
                                        {product.name}
                                    </h1>
                                    <p className="text-lg pb-3 text-gray-600 max-w-2xl mx-auto">
                                        {product.description}
                                    </p>
                                    <hr />
                                </motion.div>
                                {/* Rating */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span key={i} className={`text-2xl ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-lg font-semibold text-gray-800">
                                        {averageRating.toFixed(1)} ({reviews.length} {t("reviews")})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-lg text-gray-600">
                                        {t("Stock")}: {product.stock}
                                    </span>
                                </div>

                                {/* Category */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-500">{t("Category")}:</span>
                                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                                        {product.category.name}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4">
                                    <Button
                                        color="primary"
                                        variant="solid"
                                        size="lg"
                                        onPress={() => handleSend(product)}
                                        className="flex-1 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                                    >
                                        {t("To Order")}
                                    </Button>
                                    {/* <Button
                                        color="secondary"
                                        variant="bordered"
                                        size="lg"
                                        className="flex-1 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-3 rounded-xl transition-all duration-300"
                                    >
                                        {t("Buy Now")}
                                    </Button> */}
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>

                {/* Details and Reviews Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-12"
                >
                    <Tabs
                        aria-label="Product details and reviews"
                        color="primary"
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                            cursor: "w-full bg-gradient-to-r from-pink-500 to-pink-400",
                            tab: "max-w-fit px-0 h-12",
                            tabContent: "group-data-[selected=true]:text-pink-600"
                        }}
                    >
                        <Tab
                            key="details"
                            title={
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">{t("Details")}</span>
                                </div>
                            }
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="mt-8"
                            >
                                <div className="max-w-7xl mx-auto space-y-8">
                                    <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                        <CardBody className="space-y-6">
                                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                                                {t("About Our Store")}
                                            </h3>
                                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                                <p>
                                                    {t("Welcome to Nay Dreams, where creativity meets personalization. We specialize in creating unique, custom products that reflect your individual style and personality.")}
                                                </p>
                                                <p>
                                                    {t("Our team of skilled artisans uses premium materials and cutting-edge sublimation technology to bring your ideas to life. From personalized mugs and hoodies to custom water bottles and accessories, we offer a wide range of products that can be customized to your exact specifications.")}
                                                </p>
                                                <p>
                                                    {t("Quality is our promise. We carefully select each material and rigorously test our printing processes to ensure that your personalized items not only look great but also stand the test of time.")}
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                        <CardBody className="space-y-6">
                                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                                                {t("Store Info")}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                                            <span className="text-pink-600 text-sm">📍</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">{t("Address")}:</p>
                                                            <p className="text-gray-600">2830 Jameson North apto 27 Lincoln NE</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                                            <span className="text-pink-600 text-sm">📞</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">{t("Phone")}:</p>
                                                            <p className="text-gray-600">+1 (402) 770-0227</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                                            <span className="text-pink-600 text-sm">🕒</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">{t("Hours")}:</p>
                                                            <p className="text-gray-600">{t("Open 24 hours")}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                                            <span className="text-pink-600 text-sm">✉️</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">{t("Email")}:</p>
                                                            <p className="text-gray-600">sabrinamador2001@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </motion.div>
                        </Tab>

                        <Tab
                            key="reviews"
                            title={
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">{t("Reviews")}</span>
                                    <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                                        {reviews.length}
                                    </span>
                                </div>
                            }
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="mt-8"
                            >
                                <div className="max-w-6xl mx-auto space-y-8">
                                    {/* Write Review Form */}
                                    {currentUser ? (
                                        <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                            <CardBody className="space-y-6">
                                                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                                                    {t("Write a Review")}
                                                </h3>
                                                <form onSubmit={handleSubmitReview} className="space-y-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-gray-700">{t("Rating")}</label>
                                                        <div className="flex items-center space-x-1">
                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <button
                                                                    key={i}
                                                                    className={`text-2xl transition-colors ${i < reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                    type="button"
                                                                    onClick={() => setReviewForm(prev => ({ ...prev, rating: i + 1 }))}
                                                                >
                                                                    ★
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <Textarea
                                                        label={t("Your Review")}
                                                        placeholder={t("Share your thoughts about this product...")}
                                                        variant="bordered"
                                                        minRows={4}
                                                        className="w-full"
                                                        value={reviewForm.comment}
                                                        onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                                                        required
                                                    />
                                                    <Button
                                                        color="primary"
                                                        variant="solid"
                                                        className="w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-700 text-white font-semibold"
                                                        type="submit"
                                                        isLoading={createReviewMutation.isPending}
                                                    >
                                                        {t("Submit Review")}
                                                    </Button>
                                                </form>
                                            </CardBody>
                                        </Card>
                                    ) : (
                                        <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                            <CardBody className="text-center space-y-4">
                                                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                                                    {t("Write a Review")}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {t("You need to be logged in to write a review.")}
                                                </p>
                                                <Button
                                                    color="primary"
                                                    variant="solid"
                                                    className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-700 text-white font-semibold"
                                                    onClick={() => window.location.href = '/auth'}
                                                >
                                                    {t("Login")}
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    )}

                                    {/* Reviews List */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {t("Customer Reviews")} ({reviews.length})
                                        </h3>
                                        {reviewsLoading && <Snippet />}
                                        {reviews.map((review, index) => (
                                            <motion.div
                                                key={review.id}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                            >
                                                <Card className="p-6 shadow-md border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                                                    <CardBody className="space-y-4">
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                                                                    {review.user.name.charAt(0).toUpperCase()}
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-semibold text-gray-800">{review.user.name}</h3>
                                                                    <div className="flex items-center space-x-2">
                                                                        <div className="flex items-center">
                                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                                <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                                                    ★
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                        <span className="text-xs text-gray-500">•</span>
                                                                        <p className="text-xs text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-700 text-base leading-relaxed pl-13">
                                                            {review.comment}
                                                        </p>
                                                    </CardBody>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Tab>
                    </Tabs>
                </motion.div>

                {/* Related Products */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <RelatedProducts
                        currentProductId={product.id}
                        categoryId={product.categoryId}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
