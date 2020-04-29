/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "02391507f35c01e442acd7e889300c40"
  },
  {
    "url": "src.21a919b7.css",
    "revision": "052f4f8216d2b4b5587e83c42e40d434"
  },
  {
    "url": "src.d1839d31.js",
    "revision": "c1013ce3cd92a36a9f22a2e43bc1ab31"
  },
  {
    "url": "/",
    "revision": "26704c9094d009b8a378abf84a80a7ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
