export const navOptions = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  },
  {
    id: 'listing',
    label: 'All Products',
    path: '/product/listing/all-products'
  },
  {
    id: 'listingMen',
    label: 'Men',
    path: '/product/listing/men'
  },
  {
    id: 'listingWomen',
    label: 'Women',
    path: '/product/listing/women'
  },
  {
    id: 'listingKids',
    label: 'kids',
    path: '/product/listing/kids'
  }
];

export const adminNavOptions = [
  {
    id: 'adminListing',
    label: 'Manage All Products',
    path: '/admin-view/all-products'
  },
  {
    id: 'adminNewProduct',
    label: 'Add New Product',
    path: '/admin-view/add-product'
  }
];

export const registrationFormControls = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter Your Name',
    label: 'Name',
    componentType: 'input'
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter Your Email',
    label: 'Email',
    componentType: 'input'
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter Your Password',
    label: 'Password',
    componentType: 'input'
  },
  {
    id: 'role',
    type: '',
    placeholder: '',
    label: 'Role',
    componentType: 'select',
    options: [
      {
        id: 'admin',
        label: 'Admin'
      },
      {
        id: 'customer',
        label: 'Customer'
      }
    ]
  }
];

export const loginFormControls = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter Your Email',
    label: 'Email',
    componentType: 'input'
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter Your Password',
    label: 'Password',
    componentType: 'input'
  }
];

export const adminAddProductFormControls = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter name',
    label: 'Name',
    componentType: 'input'
  },
  {
    id: 'price',
    type: 'number',
    placeholder: 'Enter price',
    label: 'Price',
    componentType: 'input'
  },
  {
    id: 'description',
    type: 'text',
    placeholder: 'Enter description',
    label: 'Description',
    componentType: 'input'
  },
  {
    id: 'category',
    type: '',
    placeholder: '',
    label: 'Category',
    componentType: 'select',
    options: [
      {
        id: 'men',
        label: 'Men'
      },
      {
        id: 'women',
        label: 'Women'
      },
      {
        id: 'kids',
        label: 'Kids'
      }
    ]
  },
  {
    id: 'deliveryInfo',
    type: 'text',
    placeholder: 'Enter deliveryInfo',
    label: 'Delivery Info',
    componentType: 'input'
  },
  {
    id: 'onSale',
    type: '',
    placeholder: '',
    label: 'On Sale',
    componentType: 'select',
    options: [
      {
        id: 'yes',
        label: 'Yes'
      },
      {
        id: 'no',
        label: 'No'
      }
    ]
  },
  {
    id: 'priceDrop',
    type: 'number',
    placeholder: 'Enter Price Drop',
    label: 'Price Drop',
    componentType: 'input'
  }
];

export const AvailableSizes = [
  {
    id: 's',
    label: 'S'
  },
  {
    id: 'm',
    label: 'M'
  },
  {
    id: 'l',
    label: 'L'
  }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyA23wKIFzDK81dZXvqjuqrL7eUnrmjOd4U',
  authDomain: 'next-js-shopping-app-2023.firebaseapp.com',
  projectId: 'next-js-shopping-app-2023',
  storageBucket: 'next-js-shopping-app-2023.appspot.com',
  messagingSenderId: '579047270100',
  appId: '1:579047270100:web:e3bf7bc72e9dd6f523bd41',
  measurementId: 'G-P08LT79C87'
};

export const firebaseStorageURL = 'gs://next-js-shopping-app-2023.appspot.com';
