### Purpose

What this server does is, it sits between DHIS2 (data source) and the frontend. It is a middleware that handles:

- Simplifying requests to DHIS API
- Cacheing/storage of commonly-used & large data chunks
- Pagination (splitting large data chunks for faster UI/frontend)
- Redundancy with cached data

---

### Development setup
1. Clone this repository
``` bash
$ git clone https://github.com/uonafya/gcd-middleware
```

2. Navigate to project directory
``` bash
$ cd gcd-middleware
```

3. Install dependencies
``` bash
$ npm install
```

4. Start/run the server
``` bash
$ npm run dev
```

---

### Structure
The folder structure is as follows:
#### Folder structure
```
📦gcd-middleware
 ┣ 📂middleware
 ┃ ┣ 📂county
 ┃ ┣ 📂national
 ┃ ┣ 📜common.js
 ┃ ┗ 📜dashboard.js
 ┣ 📂routes
 ┃ ┣ 📂county
 ┃ ┣ 📂national
 ┃ ┣ 📜common.js
 ┃ ┗ 📜dashboard.js
 ┣ 📜README.md
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
 ```