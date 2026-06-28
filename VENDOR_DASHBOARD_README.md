# Vendor Dashboard - Next.js Implementation

A modern, minimal vendor dashboard built with Next.js that mirrors the Django template design with a glassmorphism aesthetic.

## 📁 Project Structure

### Frontend (Next.js)

```
frontend/
├── app/
│   ├── vendor/
│   │   ├── dashboard/
│   │   │   └── page.jsx              # Main dashboard page
│   │   ├── profile/
│   │   │   └── page.jsx              # Vendor profile page
│   │   ├── products/
│   │   │   ├── page.jsx              # Products management list
│   │   │   ├── create/
│   │   │   │   └── page.jsx          # Create new product
│   │   │   └── [id]/edit/
│   │   │       └── page.jsx          # Edit product
│   │   ├── marketing/
│   │   │   └── page.jsx              # Marketing tools (placeholder)
│   │   └── subscription/
│   │       └── page.jsx              # Subscription management (placeholder)
│   └── components/vendor/
│       ├── ApprovalStatus.jsx        # Approval status alert
│       ├── DashboardStats.jsx        # Stats cards grid
│       ├── QuickLinks.jsx            # Quick action links
│       ├── RecentProducts.jsx        # Recent products table
│       ├── VendorProfile.jsx         # Vendor profile form
│       └── VendorStats.jsx           # Stats component
├── lib/
│   ├── api.js                        # API base URL
│   └── vendorApi.js                  # Vendor API utilities
└── context/
    └── AuthContext.jsx               # Authentication context
```

### Backend (Django)

```
backend/vendor/
├── models.py                         # Vendor model with subscription_plan field
├── views.py                          # DRF ViewSet with vendor endpoints
├── serializers.py                    # DRF serializers
├── urls.py                           # URL routing for API
├── admin.py                          # Django admin configuration
└── migrations/                       # Database migrations
```

## 🎨 Features Implemented

### Dashboard Pages

1. **Dashboard** (`/vendor/dashboard`)
   - Welcome header with vendor name
   - Quick action buttons (Edit Profile, Add Product)
   - Approval status alert (if not verified)
   - 4 stat cards: Total Products, Views, Favorites, Plan
   - 3 quick link cards: Manage Products, Marketing Tools, View Profile
   - Recent products table with edit/delete actions

2. **Vendor Profile** (`/vendor/profile`)
   - View/edit vendor information
   - Editable fields: business_name, instagram_handle, location, bio
   - Display: verification_status, follower_count, store_slug, logo_url
   - Edit/Cancel buttons with form validation

3. **Manage Products** (`/vendor/products`)
   - Paginated list of vendor products
   - Columns: Product image, title, price, views, status
   - Actions: Toggle active/inactive, edit, delete
   - Add product button
   - Pagination controls

4. **Create Product** (`/vendor/products/create`)
   - Form with fields: title, description, price, stock, category, image
   - Image file upload
   - Submit/cancel actions

5. **Edit Product** (`/vendor/products/[id]/edit`)
   - Prefilled form with product data
   - Ability to toggle active status
   - Save/cancel actions

6. **Marketing Tools** (`/vendor/marketing`)
   - Placeholder page for future marketing features

7. **Subscription** (`/vendor/subscription`)
   - Placeholder page for subscription management

## 🎯 Design Details

### Glassmorphism UI Elements

- **Glass Effect**: Semi-transparent white background with blur effect
- **Cards**: Rounded corners (rounded-2xl), subtle shadows, hover effects
- **Icons**: SVG icons from Heroicons (24x24)
- **Colors**: Blue primary (#1d4ed8), purple accent, gradient backgrounds
- **Typography**: Geist font family (Sans & Mono)
- **Spacing**: Tailwind spacing scale with max-width container (max-w-7xl)

### Responsive Design

- Mobile-first approach
- Grid layouts: 1 col on mobile, 2-3 cols on tablet, 4 cols on desktop
- Flexbox for header and navigation
- Overflow scroll tables on small screens

### Animations

- Fade-in animation on page load
- Hover effects on cards (translateY, shadow)
- Smooth transitions on all interactive elements

## 🔌 API Integration

### Backend Endpoints

All endpoints require authentication via JWT Bearer token.

```
GET    /api/vendor/profile/              - Get vendor profile
PUT    /api/vendor/profile/update/       - Update vendor profile
GET    /api/vendor/stats/                - Get vendor statistics
GET    /api/vendor/products/             - Get vendor products (paginated)
POST   /api/vendor/products/             - Create new product
PUT    /api/vendor/products/{id}/        - Update product
DELETE /api/vendor/products/{id}/        - Delete product
```

### Frontend API Utilities

Located in `frontend/lib/vendorApi.js`:

```javascript
getVendorProfile(token)
updateVendorProfile(token, profileData)
getVendorStats(token)
getVendorProducts(token, page, pageSize)
createProduct(token, productData)
updateProduct(token, productId, productData)
deleteProduct(token, productId)
```

## 🚀 Setup Instructions

### Backend Setup

1. **Install Dependencies**
   ```bash
   cd backend
   pip install djangorestframework djangorestframework-simplejwt django-cors-headers
   ```

2. **Update Django Settings** (`config/settings.py`)
   ```python
   INSTALLED_APPS = [
       ...
       'rest_framework',
       'rest_framework_simplejwt',
       'corsheaders',
       'vendor',
       'users',
   ]

   MIDDLEWARE = [
       ...
       'corsheaders.middleware.CorsMiddleware',
   ]

   CORS_ALLOWED_ORIGINS = [
       "http://127.0.0.1:3000",
       "http://localhost:3000",
   ]

   REST_FRAMEWORK = {
       'DEFAULT_AUTHENTICATION_CLASSES': (
           'rest_framework_simplejwt.authentication.JWTAuthentication',
       ),
       'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
       'PAGE_SIZE': 10
   }
   ```

3. **Create Migrations**
   ```bash
   python manage.py makemigrations vendor
   python manage.py migrate
   ```

4. **Run Server**
   ```bash
   python manage.py runserver 8001
   ```

### Frontend Setup

1. **Dependencies** (already in package.json)
   ```bash
   cd frontend
   npm install
   ```

2. **Environment Variables** (.env.local)
   ```
   NEXT_PUBLIC_API_URL=http://127.0.0.1:8001
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

   Access at: `http://localhost:3000/vendor/dashboard`

## 📦 Key Dependencies

### Frontend
- **Next.js 16.2.7** - React framework
- **React 19.2.4** - UI library
- **Tailwind CSS 4.3.0** - Styling
- **PostCSS 8.5.15** - CSS processing

### Backend
- **Django 6.0.6** - Web framework
- **Django REST Framework 3.17.1** - REST API
- **djangorestframework-simplejwt 5.5.1** - JWT authentication
- **django-cors-headers 4.9.0** - CORS support

## 🔐 Authentication Flow

1. User logs in via `/login` page
2. JWT token stored in localStorage
3. Token passed in Authorization header: `Bearer {token}`
4. All vendor endpoints require authentication
5. Automatically redirects to login if not authenticated

## 🎨 Tailwind Configuration

- Custom colors using Tailwind defaults
- Glass effect via backdrop-filter blur
- Card hover animation via CSS transitions
- Rounded corners: `rounded-xl` (16px), `rounded-2xl` (20px)

## 📝 Example: Creating a Product

### Frontend
```javascript
// components/ProductForm.jsx
const handleSubmit = async (formData) => {
  const token = localStorage.getItem("accessToken");
  const response = await createProduct(token, formData);
  router.push("/vendor/products");
};
```

### Backend
```python
# views.py
@action(detail=False, methods=['post'])
def create_product(self, request):
    vendor = Vendor.objects.get(user=request.user)
    # Create product logic here
    return Response(serializer.data)
```

## 🔧 Troubleshooting

### CORS Issues
- Ensure `django-cors-headers` is installed and configured
- Add frontend URL to `CORS_ALLOWED_ORIGINS` in Django settings

### Authentication Errors
- Verify token format: `Bearer {token}`
- Check JWT secret in Django settings
- Ensure token hasn't expired

### Product Not Showing
- Verify vendor profile exists for logged-in user
- Check product is created in admin or via API
- Verify vendor's store_slug is unique

## 🎯 Future Enhancements

- [ ] Add product images upload to S3/cloud storage
- [ ] Implement analytics dashboard with charts
- [ ] Add order management system
- [ ] Create subscription/payment integration
- [ ] Add email notifications
- [ ] Implement review/rating system
- [ ] Add bulk product operations
- [ ] Create API rate limiting
- [ ] Add product variants/options
- [ ] Implement inventory management

## 📄 License

MIT License - Built for InstaBazaar
