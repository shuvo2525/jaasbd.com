/**
 * JAAS BD Hosting & Billing System (FOSSBilling / WHMCS-style Architecture)
 * Complete Service Catalog, Cart, Orders, User Storage, Invoices, and cPanel Provisioning.
 */

const JAAS_CATALOG = {
  // Web Hosting
  'web-hosting': {
    id: 'web-hosting',
    name: 'Web Hosting',
    category: 'Shared Hosting',
    badge: 'Popular',
    basePrice: 99,
    storageOptions: [
      { gb: 5, price: 99, ram: '1 GB', cpu: '1 Core', sites: 1, bandwidth: 'Unlimited' },
      { gb: 10, price: 199, ram: '2 GB', cpu: '1 Core', sites: 2, bandwidth: 'Unlimited' },
      { gb: 20, price: 349, ram: '2 GB', cpu: '2 Cores', sites: 5, bandwidth: 'Unlimited' },
      { gb: 50, price: 599, ram: '4 GB', cpu: '2 Cores', sites: 10, bandwidth: 'Unlimited' }
    ],
    features: ['cPanel Control Panel', 'LiteSpeed Web Server', 'Free Automated SSL', 'Daily Remote Backups', 'BDIX Ultra Fast Peering', '99.9% Uptime Guarantee']
  },
  'bdix-hosting': {
    id: 'bdix-hosting',
    name: 'BDIX Web Hosting',
    category: 'Shared Hosting',
    badge: 'Ultra Fast',
    basePrice: 134,
    storageOptions: [
      { gb: 5, price: 134, ram: '1.5 GB', cpu: '1 Core', sites: 1, bandwidth: 'Unlimited 10Gbps' },
      { gb: 15, price: 299, ram: '2 GB', cpu: '2 Cores', sites: 3, bandwidth: 'Unlimited 10Gbps' },
      { gb: 30, price: 499, ram: '4 GB', cpu: '2 Cores', sites: 10, bandwidth: 'Unlimited 10Gbps' },
      { gb: 60, price: 899, ram: '6 GB', cpu: '4 Cores', sites: 20, bandwidth: 'Unlimited 10Gbps' }
    ],
    features: ['Direct 10 Gbps BDIX Connectivity', '1ms Latency in Bangladesh', 'NVMe SSD Storage', 'cPanel with Softaculous', 'Free SSL & Daily Backup']
  },
  'starter-hosting': {
    id: 'starter-hosting',
    name: 'Cheap Starter Hosting',
    category: 'Shared Hosting',
    badge: 'Budget Friendly',
    basePrice: 99,
    storageOptions: [
      { gb: 2, price: 99, ram: '1 GB', cpu: '1 Core', sites: 1, bandwidth: '100 GB' },
      { gb: 5, price: 175, ram: '1.5 GB', cpu: '1 Core', sites: 2, bandwidth: '250 GB' },
      { gb: 10, price: 299, ram: '2 GB', cpu: '2 Cores', sites: 3, bandwidth: 'Unlimited' }
    ],
    features: ['cPanel Control Panel', 'LiteSpeed Web Server', 'Free SSL', 'Free 1-Click WordPress Installer']
  },
  'premium-hosting': {
    id: 'premium-hosting',
    name: 'Premium Hosting',
    category: 'Shared Hosting',
    badge: 'High Traffic',
    basePrice: 299,
    storageOptions: [
      { gb: 10, price: 299, ram: '2 GB', cpu: '2 Cores', sites: 2, bandwidth: 'Unlimited' },
      { gb: 25, price: 549, ram: '4 GB', cpu: '2 Cores', sites: 5, bandwidth: 'Unlimited' },
      { gb: 50, price: 899, ram: '6 GB', cpu: '4 Cores', sites: 'Unlimited', bandwidth: 'Unlimited' }
    ],
    features: ['NVMe Storage RAID-10', 'LiteSpeed + LSCache', 'cPanel with 400+ Apps', 'DDoS Protection 30 Gbps', 'Free Site Migration']
  },
  'business-hosting': {
    id: 'business-hosting',
    name: 'Business Hosting',
    category: 'Corporate Hosting',
    badge: 'Best Value',
    basePrice: 399,
    storageOptions: [
      { gb: 10, price: 399, ram: '3 GB', cpu: '2 Cores', sites: 3, bandwidth: 'Unlimited' },
      { gb: 20, price: 699, ram: '4 GB', cpu: '2 Cores', sites: 5, bandwidth: 'Unlimited' },
      { gb: 50, price: 1199, ram: '6 GB', cpu: '4 Cores', sites: 15, bandwidth: 'Unlimited' },
      { gb: 100, price: 1999, ram: '8 GB', cpu: '6 Cores', sites: 'Unlimited', bandwidth: 'Unlimited' }
    ],
    features: ['Dedicated Resource Allocation', 'Isolated Cloud Environment', 'Dedicated IP Available', 'Priority 24/7 VIP Support', 'Enterprise Mail Server']
  },
  'corporate-hosting': {
    id: 'corporate-hosting',
    name: 'Corporate Hosting',
    category: 'Enterprise Hosting',
    badge: 'Enterprise',
    basePrice: 4000,
    storageOptions: [
      { gb: 100, price: 4000, ram: '16 GB', cpu: '8 Cores', sites: 'Unlimited', bandwidth: 'Unlimited BDIX' },
      { gb: 250, price: 7500, ram: '32 GB', cpu: '12 Cores', sites: 'Unlimited', bandwidth: 'Unlimited BDIX' },
      { gb: 500, price: 12000, ram: '64 GB', cpu: '16 Cores', sites: 'Unlimited', bandwidth: 'Unlimited BDIX' }
    ],
    features: ['Custom Enterprise SLA', 'Dedicated Cloud Node', 'Daily Off-site Backup', 'Account Manager Support', 'Compliance & Security Audits']
  },
  'wordpress-hosting': {
    id: 'wordpress-hosting',
    name: 'BDIX WordPress Cloud Hosting',
    category: 'Optimized CMS',
    badge: 'WP Ultra',
    basePrice: 4499,
    storageOptions: [
      { gb: 25, price: 4499, ram: '8 GB', cpu: '4 vCPU', sites: 5, bandwidth: 'Unlimited BDIX' },
      { gb: 50, price: 7999, ram: '16 GB', cpu: '6 vCPU', sites: 15, bandwidth: 'Unlimited BDIX' },
      { gb: 100, price: 12999, ram: '32 GB', cpu: '8 vCPU', sites: 'Unlimited', bandwidth: 'Unlimited BDIX' }
    ],
    features: ['WP-CLI & Staging Env', 'Redis Object Caching', 'Free Cloudflare Enterprise CDN', 'Automated Daily WP Core & Plugin Updates']
  },
  'windows-hosting': {
    id: 'windows-hosting',
    name: 'Windows Hosting (Plesk)',
    category: 'Windows Cloud',
    badge: 'ASP.NET Core',
    basePrice: 499,
    storageOptions: [
      { gb: 10, price: 499, ram: '2 GB', cpu: '2 Cores', sites: 1, bandwidth: '500 GB' },
      { gb: 25, price: 899, ram: '4 GB', cpu: '2 Cores', sites: 3, bandwidth: 'Unlimited' },
      { gb: 50, price: 1599, ram: '6 GB', cpu: '4 Cores', sites: 10, bandwidth: 'Unlimited' }
    ],
    features: ['Plesk Obsidian Panel', 'ASP.NET Core, .NET 8/7', 'MSSQL & MySQL Databases', 'Isolated Application Pools', 'Dedicated Windows Server 2022']
  },
  'reseller-hosting': {
    id: 'reseller-hosting',
    name: 'Reseller Hosting',
    category: 'Reseller Hosting',
    badge: 'WHM / cPanel',
    basePrice: 1999,
    storageOptions: [
      { gb: 50, price: 1999, ram: '16 GB Server pool', cpu: '8 Cores', sites: 25, bandwidth: '1 TB BDIX' },
      { gb: 100, price: 3499, ram: '32 GB Server pool', cpu: '12 Cores', sites: 60, bandwidth: '2 TB BDIX' },
      { gb: 250, price: 6999, ram: '64 GB Server pool', cpu: '16 Cores', sites: 'Unlimited', bandwidth: '5 TB BDIX' }
    ],
    features: ['Full WHM Reseller Control', 'Create Unlimited cPanel Accounts', '100% White-label Nameservers', 'Free Automated Client Billing System']
  },

  // VPS & Cloud
  'managed-vps': {
    id: 'managed-vps',
    name: 'Managed Cloud VPS',
    category: 'Cloud & Servers',
    badge: 'Dedicated Power',
    basePrice: 1650,
    storageOptions: [
      { gb: 40, price: 1650, ram: '4 GB DDR4', cpu: '2 vCPU', sites: 'Unlimited', bandwidth: '2 TB BDIX' },
      { gb: 80, price: 2950, ram: '8 GB DDR4', cpu: '4 vCPU', sites: 'Unlimited', bandwidth: '4 TB BDIX' },
      { gb: 160, price: 4950, ram: '16 GB DDR4', cpu: '6 vCPU', sites: 'Unlimited', bandwidth: '6 TB BDIX' },
      { gb: 320, price: 8500, ram: '32 GB DDR4', cpu: '8 vCPU', sites: 'Unlimited', bandwidth: '10 TB BDIX' }
    ],
    features: ['Full Root Access', 'cPanel/WHM or Webuzo License', 'Dedicated IPv4 + IPv6', 'Tier-III BDIX Connectivity', 'Instant 60s OS Reload']
  },
  'bdix-vps': {
    id: 'bdix-vps',
    name: 'BDIX KVM VPS',
    category: 'Cloud & Servers',
    badge: 'Ultra Low Ping',
    basePrice: 1999,
    storageOptions: [
      { gb: 40, price: 1999, ram: '4 GB DDR4', cpu: '2 vCPU', sites: 'Unlimited', bandwidth: 'Unlimited 1Gbps BDIX' },
      { gb: 80, price: 3499, ram: '8 GB DDR4', cpu: '4 vCPU', sites: 'Unlimited', bandwidth: 'Unlimited 1Gbps BDIX' },
      { gb: 160, price: 5999, ram: '16 GB DDR4', cpu: '6 vCPU', sites: 'Unlimited', bandwidth: 'Unlimited 1Gbps BDIX' }
    ],
    features: ['Direct Dhaka Datacenter', 'KVM Virtualization', 'Dedicated BDIX Bandwidth', 'cPanel/Plesk Ready', 'DDoS Protection']
  },
  'bdix-rdp': {
    id: 'bdix-rdp',
    name: 'BDIX Windows RDP',
    category: 'Cloud & Servers',
    badge: 'Remote Desktop',
    basePrice: 1999,
    storageOptions: [
      { gb: 50, price: 1999, ram: '4 GB DDR4', cpu: '2 vCPU', sites: '1 User', bandwidth: 'Unlimited BDIX' },
      { gb: 100, price: 3200, ram: '8 GB DDR4', cpu: '4 vCPU', sites: '2 Users', bandwidth: 'Unlimited BDIX' }
    ],
    features: ['Windows Server 2022', 'Full Administrator Access', '1Gbps BDIX Download/Upload', 'Forex & Remote Work Ready']
  },
  'aws-vps': {
    id: 'aws-vps',
    name: 'AWS Managed VPS',
    category: 'Cloud & Servers',
    badge: 'AWS Infrastructure',
    basePrice: 13040,
    storageOptions: [
      { gb: 80, price: 13040, ram: '8 GB AWS EC2', cpu: '2 vCPU', sites: 'Unlimited', bandwidth: '3 TB Global' },
      { gb: 160, price: 22500, ram: '16 GB AWS EC2', cpu: '4 vCPU', sites: 'Unlimited', bandwidth: '5 TB Global' }
    ],
    features: ['Enterprise AWS Cloud', '24/7 Managed Monitoring', 'Auto Elastic Scaling', 'High Availability 99.99% SLA']
  },
  'digitalocean-vps': {
    id: 'digitalocean-vps',
    name: 'DigitalOcean Managed VPS',
    category: 'Cloud & Servers',
    badge: 'DO Droplet',
    basePrice: 4499,
    storageOptions: [
      { gb: 50, price: 4499, ram: '4 GB RAM', cpu: '2 vCPU', sites: 'Unlimited', bandwidth: '3 TB Transfer' },
      { gb: 100, price: 7999, ram: '8 GB RAM', cpu: '4 vCPU', sites: 'Unlimited', bandwidth: '5 TB Transfer' }
    ],
    features: ['NVMe Fast Storage', 'Fully Managed by JAAS BD', 'cPanel License Included', 'Automated Daily Snapshots']
  },
  'dedicated-server': {
    id: 'dedicated-server',
    name: 'BDIX Dedicated Server',
    category: 'Dedicated Hardware',
    badge: 'Bare Metal',
    basePrice: 35000,
    storageOptions: [
      { gb: 1000, price: 35000, ram: '32 GB DDR4 ECC', cpu: 'Intel Xeon 8 Core', sites: 'Unlimited', bandwidth: '100 Mbps Dedicated BDIX' },
      { gb: 2000, price: 55000, ram: '64 GB DDR4 ECC', cpu: 'Dual Xeon 16 Core', sites: 'Unlimited', bandwidth: '1 Gbps Dedicated BDIX' }
    ],
    features: ['100% Bare Metal Server', 'IPMI / KVM Remote Access', 'Tier-III Datacenter in Dhaka', 'Free Hardware Replacement in 2 Hours']
  },

  // Domains & Email
  'domain-registration': {
    id: 'domain-registration',
    name: 'Domain Registration',
    category: 'Domains',
    badge: 'Instant DNS',
    basePrice: 1450,
    storageOptions: [
      { gb: 0, price: 1450, ram: '-', cpu: '-', sites: 1, bandwidth: '-' }
    ],
    features: ['Full DNS Management', 'Free Domain Privacy Protection', 'Instant DNS Propagation', 'Free 2 Email Accounts', '24/7 Support']
  },
  'business-email': {
    id: 'business-email',
    name: 'OX Business Email',
    category: 'Communication',
    badge: 'Branded Email',
    basePrice: 159,
    storageOptions: [
      { gb: 10, price: 159, ram: '-', cpu: '-', sites: '1 Mailbox', bandwidth: 'Unlimited' },
      { gb: 25, price: 299, ram: '-', cpu: '-', sites: '3 Mailboxes', bandwidth: 'Unlimited' },
      { gb: 50, price: 499, ram: '-', cpu: '-', sites: '5 Mailboxes', bandwidth: 'Unlimited' }
    ],
    features: ['Premium Webmail Interface', 'Anti-Spam & Anti-Virus Shield', 'Mobile Sync (iOS & Android)', 'Calendar, Tasks & Contacts']
  },
  'gsuite': {
    id: 'gsuite',
    name: 'Google Workspace (G Suite)',
    category: 'Communication',
    badge: 'Official Google',
    basePrice: 1049,
    storageOptions: [
      { gb: 30, price: 1049, ram: '-', cpu: '-', sites: '1 User', bandwidth: 'Unlimited' },
      { gb: 2000, price: 1890, ram: '-', cpu: '-', sites: '1 User (2TB Cloud)', bandwidth: 'Unlimited' }
    ],
    features: ['Official Gmail for Business', 'Google Meet 100+ Participants', 'Google Drive, Docs, Sheets', 'Admin Security Console']
  },
  'ssl-cert': {
    id: 'ssl-cert',
    name: 'Sectigo / Comodo SSL Certificate',
    category: 'Security',
    badge: '256-bit Encryption',
    basePrice: 1499,
    storageOptions: [
      { gb: 0, price: 1499, ram: '-', cpu: '-', sites: 'Single Domain', bandwidth: '1 Year' },
      { gb: 0, price: 3499, ram: '-', cpu: '-', sites: 'Wildcard (*.domain)', bandwidth: '1 Year' }
    ],
    features: ['256-bit Strong Encryption', 'Green Padlock in Browsers', 'Free Dynamic Site Seal', '৳10,000 USD Warranty']
  }
};

// Storage helper functions (localStorage abstraction)
const JaasStore = {
  // Get active client user
  getClientUser() {
    const raw = localStorage.getItem('jaas_client_user');
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return {
      name: 'Ashish Halder',
      email: 'ashish@example.com',
      phone: '+88-01818-430308',
      company: 'Golden Frame BD',
      address: '843/06, Kadim Dewhata, Mirzapur, Tangail. 1940.',
      loggedIn: false
    };
  },

  setClientUser(user) {
    localStorage.setItem('jaas_client_user', JSON.stringify(user));
  },

  // Get active services
  getServices() {
    const raw = localStorage.getItem('jaas_services');
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return [
      {
        id: 'srv-101',
        planId: 'business-hosting',
        name: 'Business Hosting',
        domain: 'goldenframebd.com',
        storage: '20 GB NVMe SSD',
        billingCycle: 'Annually',
        price: 4788,
        status: 'Active',
        regDate: '2026-03-15',
        nextDue: '2027-03-15',
        serverIP: '103.145.118.25',
        nameservers: ['ns1.jaasbd.com', 'ns2.jaasbd.com'],
        cpanelUser: 'jaas_golden',
        cpanelPass: 'J@as2026!k9Fm',
        diskUsed: '3.4 GB',
        diskLimit: '20 GB',
        bandwidthUsed: '24.8 GB'
      }
    ];
  },

  saveService(service) {
    const services = this.getServices();
    services.unshift(service);
    localStorage.setItem('jaas_services', JSON.stringify(services));
    return services;
  },

  // Get Invoices
  getInvoices() {
    const raw = localStorage.getItem('jaas_invoices');
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return [
      {
        id: 'INV-2026-0843',
        date: '2026-03-15',
        dueDate: '2026-03-15',
        planName: 'Business Hosting (20 GB NVMe)',
        domain: 'goldenframebd.com',
        amount: 4788,
        status: 'PAID',
        gateway: 'EPS Easy Payment System',
        txnId: 'TXN-EPS-893041',
        cpanelUser: 'jaas_golden',
        cpanelPass: 'J@as2026!k9Fm',
        serverIP: '103.145.118.25'
      }
    ];
  },

  saveInvoice(invoice) {
    const invoices = this.getInvoices();
    invoices.unshift(invoice);
    localStorage.setItem('jaas_invoices', JSON.stringify(invoices));
    return invoices;
  },

  // Generate secure cPanel password
  generatePassword() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*';
    let pass = 'J@as';
    for (let i = 0; i < 8; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  },

  // Generate clean cPanel username
  generateUsername(name, domain) {
    const base = (name || domain || 'client').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 6);
    const rand = Math.floor(10 + Math.random() * 90);
    return 'jaas_' + base + rand;
  },

  // Asynchronous order sync to MySQL (via api.php) or Node.js server
  async syncOrderToBackend(client, invoice, service) {
    const endpoints = ['api.php?action=place_order', '/api/orders'];
    for (const ep of endpoints) {
      try {
        const resp = await fetch(ep, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ client, invoice, service })
        });
        if (resp.ok) {
          const res = await resp.json();
          if (res.success) return true;
        }
      } catch (err) {}
    }
    return false;
  }
};

// Global helper to buy plan
function buyPlan(planId) {
  const target = planId || 'business-hosting';
  window.location.href = 'order.html?plan=' + encodeURIComponent(target);
}

// Dynamic Config Overrides from Admin CMS & Server API
(async function() {
  try {
    const raw = localStorage.getItem('jaas_site_config');
    if (raw) {
      const localCfg = JSON.parse(raw);
      if (localCfg.packages && Array.isArray(localCfg.packages)) {
        localCfg.packages.forEach(p => {
          JAAS_CATALOG[p.id] = p;
        });
      }
    }

    // Try fetching live catalog from PHP API or Node.js or JSON
    const configEndpoints = ['api.php?action=get_config', '/api/config', 'site-config.json'];
    for (const ep of configEndpoints) {
      try {
        const resp = await fetch(ep);
        if (resp.ok) {
          const srvCfg = await resp.json();
          if (srvCfg && srvCfg.packages && Array.isArray(srvCfg.packages)) {
            srvCfg.packages.forEach(p => {
              JAAS_CATALOG[p.id] = p;
            });
            break;
          }
        }
      } catch(err) {}
    }
  } catch (e) {}
})();

// Attach to window
window.JAAS_CATALOG = JAAS_CATALOG;
window.JaasStore = JaasStore;
window.buyPlan = buyPlan;
