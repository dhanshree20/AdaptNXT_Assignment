import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

import './Component/Appp.css';

const data = [
  {
    date: '6/30/2024',
    orders: 4,
    sales: 1404,
  },
  {
    date: '7/6/2024',
    orders: 2,
    sales: 800,
  },
  {
    date: '7/13/2024',
    orders: 2,
    sales: 600,
  },
  {
    date: '7/21/2024',
    orders: 2,
    sales: 400,
  },
  {
    date: '7/27/2024',
    orders: 2,
    sales: 200,
  },
];

const COLORS = ['#fb5c7c', '#05c7dc'];

const App = () => {
  return (
    <div className="container">
        <div className="sidebar">
        <div className="dashboard">
          <img src="dashboard.jpg" alt="Inventory" />
          <span className="imgspan">Dashboard</span>
        </div>
        <div className="sidebar-item">
          <img src="inventory.png" alt="Inventory" />
          <span>Inventory</span>
        </div>
        <div className="sidebar-item">
          <img src="order.png" alt="Order" />
          <span>Order</span>
        </div>
        <div className="sidebar-item">
          <img src="returns.png" alt="Returns" />
          <span>Returns</span>
        </div>
        <div className="sidebar-item">
          <img src="customer.png" alt="Customers" />
          <span>Customers</span>
        </div>
        <div className="sidebar-item">
          <img src="shipping.jpg" alt="Shipping" />
          <span>Shipping</span>
        </div>
        <div className="sidebar-item">
          <img src="channel.png" alt="Channel" />
          <span>Channel</span>
        </div>
        <div className="sidebar-item">
          <img src="integration.jpg" alt="Integrations" />
          <span>Integrations</span>
        </div>
        <div className="sidebar-item">
          <img src="calculator.png" alt="Calculator" />
          <span>Calculator</span>
        </div>
        <div className="sidebar-item">
          <img src="reports.png" alt="Reports" />
          <span>Reports</span>
        </div>
        <div className="sidebar-item">
          <img src="account.png" alt="Account" />
          <span>Account</span>
        </div>
      </div>
      <div className="content">
      <div className="span1">
        <h3>Dashboard</h3>
      </div>
      <div className="chart-container">
        <h2 className="h2">Sales vs Orders</h2>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#FFBB28" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#0088FE" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
    <div className="pie-chart-container">
        <h2>Portion of Sales</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={[
              { name: 'WooCommerce Store', value: 1483.722 },
              { name: 'Shopify Store', value: 1175.278 },
            ]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {[
              { name: 'WooCommerce Store', value: 1400 },
              { name: 'Shopify Store', value: 1259 },
            ].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color woocommerce"></div>
            <span>WooCommerce Store</span>
          </div>
          <div className="legend-item">
            <div className="legend-color shopify"></div>
            <span>Shopify Store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
