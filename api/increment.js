// api/increment.js

let clickCount = 123; // Initial value

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ clickCount });
  } else if (req.method === 'POST') {
    clickCount++;
    res.status(200).json({ clickCount });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
