# افغانکار - راهنمای طراحی و استایل

## 🎨 سیستم طراحی افغانکار

این راهنما شامل تمام عناصر طراحی، رنگ‌ها، تایپوگرافی و کامپوننت‌های استفاده شده در وب‌سایت افغانکار است.

---

## 🌈 پالت رنگ

### رنگ‌های اصلی
```css
--primary-color: #1A73E8      /* آبی عمیق - رنگ اصلی */
--primary-dark: #1557B0       /* آبی تیره - برای hover */
--primary-light: #4285F4      /* آبی روشن - برای accents */
```

### رنگ‌های ثانویه
```css
--secondary-color: #E3F2FD    /* آبی روشن - پس‌زمینه */
--accent-color: #FFC107       /* زرد گرم - برای CTA */
--accent-dark: #FF8F00        /* زرد تیره - برای hover */
```

### رنگ‌های خنثی
```css
--text-primary: #111827       /* خاکستری تیره - متن اصلی */
--text-secondary: #6B7280     /* خاکستری متوسط - متن ثانویه */
--text-light: #9CA3AF         /* خاکستری روشن - متن کم‌اهمیت */
--bg-primary: #FFFFFF         /* سفید - پس‌زمینه اصلی */
--bg-secondary: #F9FAFB       /* خاکستری خیلی روشن - پس‌زمینه */
--bg-tertiary: #F3F4F6        /* خاکستری روشن - پس‌زمینه سوم */
--border-color: #E5E7EB       /* خاکستری - حاشیه */
--border-light: #F3F4F6       /* خاکستری روشن - حاشیه کم‌رنگ */
```

### گرادیان‌ها
```css
--gradient-primary: linear-gradient(135deg, #1A73E8 0%, #1557B0 100%)
--gradient-secondary: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)
--gradient-accent: linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)
--gradient-hero: linear-gradient(135deg, #1A73E8 0%, #4285F4 50%, #E3F2FD 100%)
```

---

## 📝 تایپوگرافی

### فونت‌ها
- **فونت اصلی**: Inter, Vazir, Tahoma, Arial, sans-serif
- **جهت**: راست به چپ (RTL)
- **وزن‌های فونت**:
  - Light (300): برای متن‌های ظریف
  - Medium (500): برای متن‌های متوسط
  - Semibold (600): برای تاکید
  - Bold (700): برای عناوین
  - Black (900): برای عناوین اصلی

### سایزهای فونت
```css
.text-xs: 0.75rem    (12px)
.text-sm: 0.875rem   (14px)
.text-base: 1rem     (16px)
.text-lg: 1.125rem   (18px)
.text-xl: 1.25rem    (20px)
.text-2xl: 1.5rem    (24px)
.text-3xl: 1.875rem  (30px)
.text-4xl: 2.25rem   (36px)
.text-5xl: 3rem      (48px)
.text-6xl: 3.75rem   (60px)
.text-7xl: 4.5rem    (72px)
.text-8xl: 6rem      (96px)
```

### فاصله خط
```css
.leading-none: 1        /* فشرده */
.leading-tight: 1.25    /* تنگ */
.leading-normal: 1.5    /* عادی */
.leading-relaxed: 1.625 /* راحت */
```

### فاصله حروف
```css
.tracking-tight: -0.025em  /* فشرده */
.tracking-normal: 0        /* عادی */
.tracking-wide: 0.025em    /* باز */
```

---

## 🧩 کامپوننت‌ها

### Button (دکمه)
```tsx
<Button 
  variant="primary"    // primary, secondary, accent, outline, ghost
  size="md"           // sm, md, lg, xl
  href="/contact"     // برای لینک
  onClick={handleClick} // برای عملکرد
>
  متن دکمه
</Button>
```

**ویژگی‌ها:**
- `variant`: نوع دکمه (رنگ و استایل)
- `size`: اندازه دکمه
- `href`: برای تبدیل به لینک
- `onClick`: عملکرد کلیک
- `disabled`: غیرفعال کردن

### Card (کارت)
```tsx
<Card 
  padding="lg"        // sm, md, lg, xl
  shadow="lg"         // sm, md, lg, xl, 2xl
  hover={true}        // انیمیشن hover
>
  محتوای کارت
</Card>
```

### Container (کانتینر)
```tsx
<Container 
  size="lg"           // sm, md, lg, xl, full
  padding="lg"        // sm, md, lg, xl
>
  محتوا
</Container>
```

### Section (بخش)
```tsx
<Section 
  background="white"  // white, gray, primary, secondary, gradient
  padding="xl"        // sm, md, lg, xl, 2xl
  id="section-id"     // شناسه بخش
>
  محتوای بخش
</Section>
```

### Hero (قهرمان)
```tsx
<Hero
  title="عنوان اصلی"
  subtitle="زیرعنوان"
  description="توضیحات"
  primaryButton={{ text: "دکمه اصلی", href: "/contact" }}
  secondaryButton={{ text: "دکمه ثانویه", href: "/about" }}
  background="gradient"  // gradient, primary, secondary
  stats={[
    { number: "100+", label: "پروژه" },
    { number: "50+", label: "مشتری" }
  ]}
/>
```

---

## 🎭 انیمیشن‌ها

### Framer Motion
تمام انیمیشن‌ها با استفاده از Framer Motion پیاده‌سازی شده‌اند:

```tsx
// انیمیشن ورود
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  محتوا
</motion.div>

// انیمیشن hover
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  محتوا
</motion.div>
```

### انیمیشن‌های CSS
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

---

## 📱 ریسپانسیو

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1280px) { }
```

### Grid System
```tsx
// Grid ریسپانسیو
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* آیتم‌ها */}
</div>

// Flex ریسپانسیو
<div className="flex flex-col sm:flex-row gap-4">
  {/* آیتم‌ها */}
</div>
```

---

## 🎯 اصول طراحی

### 1. سادگی
- استفاده از فضای سفید مناسب
- حذف عناصر غیرضروری
- تمرکز بر محتوا

### 2. سازگاری
- استفاده از رنگ‌های ثابت
- تایپوگرافی یکسان
- فاصله‌گذاری منظم

### 3. دسترسی
- کنتراست مناسب رنگ‌ها
- اندازه فونت خوانا
- پشتیبانی از RTL

### 4. عملکرد
- انیمیشن‌های سبک
- تصاویر بهینه
- کد تمیز و سریع

---

## 🛠️ کلاس‌های کمکی

### Spacing
```css
.p-4    /* padding: 1rem */
.px-6   /* padding-left: 1.5rem; padding-right: 1.5rem */
.py-8   /* padding-top: 2rem; padding-bottom: 2rem */
.m-4    /* margin: 1rem */
.mx-auto /* margin-left: auto; margin-right: auto */
```

### Display
```css
.flex           /* display: flex */
.grid           /* display: grid */
.hidden         /* display: none */
.block          /* display: block */
```

### Position
```css
.relative       /* position: relative */
.absolute       /* position: absolute */
.fixed          /* position: fixed */
.sticky         /* position: sticky */
```

### Border Radius
```css
.rounded-lg     /* border-radius: 0.5rem */
.rounded-xl     /* border-radius: 0.75rem */
.rounded-2xl    /* border-radius: 1rem */
.rounded-full   /* border-radius: 9999px */
```

---

## 📋 چک‌لیست طراحی

### ✅ قبل از انتشار
- [ ] تمام رنگ‌ها مطابق پالت هستند
- [ ] تایپوگرافی یکسان است
- [ ] فاصله‌گذاری منظم است
- [ ] انیمیشن‌ها روان هستند
- [ ] ریسپانسیو در تمام دستگاه‌ها
- [ ] RTL درست کار می‌کند
- [ ] دسترسی مناسب است
- [ ] عملکرد بهینه است

### ✅ تست‌ها
- [ ] تست در مرورگرهای مختلف
- [ ] تست در اندازه‌های مختلف صفحه
- [ ] تست سرعت بارگذاری
- [ ] تست دسترسی
- [ ] تست RTL

---

## 🚀 استفاده

### نصب وابستگی‌ها
```bash
npm install framer-motion
```

### Import کامپوننت‌ها
```tsx
import Button from '../ui/Button'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Hero from '../ui/Hero'
```

### استفاده از CSS
```tsx
// در فایل CSS
import './index.css'

// یا در کامپوننت
<div className="bg-primary text-white p-6 rounded-lg">
  محتوا
</div>
```

---

## 📞 پشتیبانی

برای سوالات و مشکلات طراحی:
- **ایمیل**: design@afghankar.com
- **تیم طراحی**: تیم UI/UX افغان کار

---

**افغان کار - نوآوری در طراحی و توسعه** 🎨


