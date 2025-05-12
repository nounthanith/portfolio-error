const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nounthanith99@gmail.com'
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    toast.success("Message sent!");
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    toast.error("Failed to send. Please click on facebook icon for contact me😂🙏❤️.");
    console.error("EmailJS Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};