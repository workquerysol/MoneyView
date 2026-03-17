export const STOCKS = [
  { id: 1, name: 'Reliance Industries', symbol: 'RELIANCE', sector: 'Energy', description: 'India\'s largest company by market cap. Diversified across energy, petrochemicals, retail, and telecom.', change: '+1.24%', positive: true },
  { id: 2, name: 'HDFC Bank', symbol: 'HDFCBANK', sector: 'Banking', description: 'India\'s leading private sector bank with consistent growth in retail and corporate banking.', change: '+0.87%', positive: true },
  { id: 3, name: 'Infosys', symbol: 'INFY', sector: 'IT', description: 'Global leader in technology services and consulting. Strong dividend track record.', change: '-0.43%', positive: false },
  { id: 4, name: 'TCS', symbol: 'TCS', sector: 'IT', description: 'India\'s largest IT services company with a massive global footprint across 50+ countries.', change: '+0.56%', positive: true },
  { id: 5, name: 'ICICI Bank', symbol: 'ICICIBANK', sector: 'Banking', description: 'Second largest private bank in India with a diversified product portfolio.', change: '+1.12%', positive: true },
  { id: 6, name: 'Bajaj Finance', symbol: 'BAJFINANCE', sector: 'NBFC', description: 'India\'s leading NBFC with a strong consumer and SME lending business.', change: '+2.05%', positive: true },
  { id: 7, name: 'Kotak Mahindra Bank', symbol: 'KOTAKBANK', sector: 'Banking', description: 'Premium private sector bank known for its quality portfolio and wealth management.', change: '-0.28%', positive: false },
  { id: 8, name: 'Larsen & Toubro', symbol: 'LT', sector: 'Infrastructure', description: 'India\'s engineering, construction, and technology conglomerate with global presence.', change: '+0.94%', positive: true },
  { id: 9, name: 'Asian Paints', symbol: 'ASIANPAINT', sector: 'FMCG', description: 'India\'s largest paint company with strong brand and distribution network.', change: '-0.67%', positive: false },
  { id: 10, name: 'Maruti Suzuki', symbol: 'MARUTI', sector: 'Auto', description: 'India\'s largest passenger vehicle manufacturer with ~40% market share.', change: '+1.45%', positive: true },
  { id: 11, name: 'Sun Pharma', symbol: 'SUNPHARMA', sector: 'Pharma', description: 'India\'s largest pharma company with strong US generics and specialty drugs business.', change: '+0.33%', positive: true },
  { id: 12, name: 'Titan Company', symbol: 'TITAN', sector: 'Consumer', description: 'India\'s leading lifestyle brand in watches, jewellery, and eyewear.', change: '+1.78%', positive: true },
]

export const US_STOCKS = [
  { id: 'us1', name: 'Apple', symbol: 'AAPL', description: 'Leading consumer electronics giant with strong services growth.', change: '+1.2%', positive: true },
  { id: 'us2', name: 'Microsoft', symbol: 'MSFT', description: 'Cloud leader with strong recurring revenue and enterprise reach.', change: '+0.8%', positive: true },
  { id: 'us3', name: 'Amazon', symbol: 'AMZN', description: 'E-commerce and cloud computing powerhouse driven by AWS.', change: '+0.7%', positive: true },
  { id: 'us4', name: 'Tesla', symbol: 'TSLA', description: 'Electric vehicles and clean energy leader.', change: '-0.5%', positive: false },
  { id: 'us5', name: 'Google', symbol: 'GOOGL', description: 'Search, ads, and cloud leader with massive AI investments.', change: '+1.1%', positive: true },
  { id: 'us6', name: 'Nvidia', symbol: 'NVDA', description: 'GPU leader powering AI training and data centers.', change: '+2.5%', positive: true },
  { id: 'us7', name: 'Meta Platforms', symbol: 'META', description: 'Social media giant investing in metaverse, ads, and commerce.', change: '+0.9%', positive: true },
  { id: 'us8', name: 'Netflix', symbol: 'NFLX', description: 'Streaming pioneer with global subscriber growth.', change: '-0.2%', positive: false },
  { id: 'us9', name: 'AMD', symbol: 'AMD', description: 'High-performance CPUs and GPUs for PCs and data centers.', change: '+1.7%', positive: true },
]

export const OPTIONS_CHAIN = [
  { id: 'opt1', underlying: 'NIFTY 50', strike: 19600, type: 'Call', expiry: '28 Mar 2026', last: '120', change: '+2.1%', iv: '23%' },
  { id: 'opt2', underlying: 'NIFTY 50', strike: 19500, type: 'Put', expiry: '28 Mar 2026', last: '78', change: '-0.6%', iv: '22%' },
  { id: 'opt3', underlying: 'BANKNIFTY', strike: 45000, type: 'Call', expiry: '28 Mar 2026', last: '145', change: '+1.8%', iv: '26%' },
  { id: 'opt4', underlying: 'BANKNIFTY', strike: 45200, type: 'Put', expiry: '28 Mar 2026', last: '110', change: '-0.2%', iv: '25%' },
  { id: 'opt5', underlying: 'NIFTY 50', strike: 19700, type: 'Call', expiry: '28 Mar 2026', last: '98', change: '+1.1%', iv: '24%' },
  { id: 'opt6', underlying: 'NIFTY 50', strike: 19400, type: 'Put', expiry: '28 Mar 2026', last: '65', change: '-0.4%', iv: '21%' },
]

export const ETFS = [
  { id: 1, name: 'Nifty 50 ETF', symbol: 'NIFTYBEES', type: 'Index ETF', description: 'Tracks Nifty 50, providing diversified exposure to India\'s top 50 companies.', expenseRatio: '0.04%', change: '+0.78%', positive: true },
  { id: 2, name: 'Sensex ETF', symbol: 'SENSEXETF', type: 'Index ETF', description: 'Tracks BSE Sensex, offering exposure to 30 blue-chip companies.', expenseRatio: '0.07%', change: '+0.65%', positive: true },
  { id: 3, name: 'Bank Nifty ETF', symbol: 'BANKBEES', type: 'Sectoral ETF', description: 'Tracks Bank Nifty index — ideal for banking sector exposure.', expenseRatio: '0.12%', change: '+1.01%', positive: true },
  { id: 4, name: 'IT Sector ETF', symbol: 'ITETF', type: 'Sectoral ETF', description: 'Provides exposure to India\'s top IT companies through a single instrument.', expenseRatio: '0.15%', change: '-0.32%', positive: false },
  { id: 5, name: 'Midcap 150 ETF', symbol: 'MID150BEES', type: 'Index ETF', description: 'Tracks Nifty Midcap 150 index for higher-growth mid-size company exposure.', expenseRatio: '0.10%', change: '+1.54%', positive: true },
  { id: 6, name: 'Pharma ETF', symbol: 'PHARMABEES', type: 'Sectoral ETF', description: 'Invests in top pharmaceutical and healthcare companies listed in India.', expenseRatio: '0.18%', change: '+0.42%', positive: true },
]

export const SECTORS = ['All', 'Banking', 'IT', 'Energy', 'NBFC', 'Infrastructure', 'FMCG', 'Auto', 'Pharma', 'Consumer']
export const ETF_TYPES = ['All', 'Index ETF', 'Sectoral ETF']
