# Description:
A weather api wrapper service is a backend service integrating a third party api with a caching feature through redis.
Caching is used here to temporary fetch the data without hitting the api if the same location is searched within the time span of 300 seconds.
### You have to use your own API KEY!!!
# How to run?
1. Open two terminals: one in vs code powershell and another in vs code wsl.
2. `npm i` in powershell terminal
3. `sudo apt install redis-server -y` then `sudo service redis-server start`
4. Create a .env file where you can mention the API_KEY and the REDIS_URL(redis://127.0.0.1:6379)
5. You may now access the complete function at the endpoint: `http://localhost:9300/temp/` with body mentioned:  
     `"city": "YOUR_CITY_NAME"`
