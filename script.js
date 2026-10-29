// User / Customer Account

const customerAccount = {
  id: 1,
  name: "Juan Dela Cruz",
  email: "user@example.com",
  password: "user123",
  role: "customer",
  contact: "09123456789",
  address: "Camiling, Tarlac",
  cart: [],
  wishlist: [],
  orders: [
    {
      orderId: "ORD-1001",
      total: 1200,
      status: "Delivered"
    },
    {
      orderId: "ORD-1002",
      total: 850,
      status: "Pending"
    }
  ]
};

export default customerAccount;