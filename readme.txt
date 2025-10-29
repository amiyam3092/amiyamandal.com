cd "/Users/amiya.mandal/Desktop/Code Base/amiyamandal.com"
npm run dev

open http://localhost:5173

* Build and preview:
npm run build
npm run preview
# then visit the shown URL (default http://localhost:4173)

* If the port is busy
npm run dev -- --port 5174


Press Ctrl + C in the terminal running npm run dev.
If it was started in the background or you closed that session:
Find and kill the process (default Vite port 5173):
lsof -ti :5173 | xargs kill

