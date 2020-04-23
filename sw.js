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
    "revision": "8cab01ba1482fdf4fa44955b5a3d5cae"
  },
  {
    "url": "src.bac873c9.js",
    "revision": "741499d0a7710e01bff8bc0c305a8c8a"
  },
  {
    "url": "src.e34ff646.css",
    "revision": "535bfa9ccd6511e6e980ddec1fbcda1e"
  },
  {
    "url": "/",
    "revision": "4409f453135ea9f9a716933a1caf60f6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
