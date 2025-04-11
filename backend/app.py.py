from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/high-iv-options')
def get_high_iv():
    # Dummy data - real scraper to be plugged in
    return jsonify([
        {
            "stock": "RELIANCE",
            "spot": 2735,
            "strike": 2750,
            "type": "CE",
            "iv": 62.5,
            "ltp": 88.2,
            "volume": 95000
        },
        {
            "stock": "INFY",
            "spot": 1490,
            "strike": 1500,
            "type": "PE",
            "iv": 55.1,
            "ltp": 66.5,
            "volume": 72000
        }
    ])

if __name__ == '__main__':
    app.run(debug=True)