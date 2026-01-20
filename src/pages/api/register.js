export default function POST(req, res) {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    setTimeout(() => {
        res.status(200).json({ success: true });
    }, 800);
}

