var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "../node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports._ = _interop_require_default;
  }
});

// ../node_modules/next/dist/shared/lib/utils/warn-once.js
var require_warn_once = __commonJS({
  "../node_modules/next/dist/shared/lib/utils/warn-once.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "warnOnce", {
      enumerable: true,
      get: function() {
        return warnOnce;
      }
    });
    var warnOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const warnings = /* @__PURE__ */ new Set();
      warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
  }
});

// ../node_modules/next/dist/shared/lib/image-blur-svg.js
var require_image_blur_svg = __commonJS({
  "../node_modules/next/dist/shared/lib/image-blur-svg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getImageBlurSvg", {
      enumerable: true,
      get: function() {
        return getImageBlurSvg;
      }
    });
    function getImageBlurSvg(param) {
      let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
      const std = 20;
      const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
      const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
      const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
      const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
      return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
    }
  }
});

// ../node_modules/next/dist/shared/lib/image-config.js
var require_image_config = __commonJS({
  "../node_modules/next/dist/shared/lib/image-config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      VALID_LOADERS: function() {
        return VALID_LOADERS;
      },
      imageConfigDefault: function() {
        return imageConfigDefault;
      }
    });
    var VALID_LOADERS = [
      "default",
      "imgix",
      "cloudinary",
      "akamai",
      "custom"
    ];
    var imageConfigDefault = {
      deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
      ],
      imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
      ],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: false,
      minimumCacheTTL: 60,
      formats: [
        "image/webp"
      ],
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: void 0,
      unoptimized: false
    };
  }
});

// ../node_modules/next/dist/shared/lib/get-img-props.js
var require_get_img_props = __commonJS({
  "../node_modules/next/dist/shared/lib/get-img-props.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getImgProps", {
      enumerable: true,
      get: function() {
        return getImgProps;
      }
    });
    var _warnonce = require_warn_once();
    var _imageblursvg = require_image_blur_svg();
    var _imageconfig = require_image_config();
    var VALID_LOADING_VALUES = [
      "lazy",
      "eager",
      void 0
    ];
    var INVALID_BACKGROUND_SIZE_VALUES = [
      "-moz-initial",
      "fill",
      "none",
      "scale-down",
      void 0
    ];
    function isStaticRequire(src) {
      return src.default !== void 0;
    }
    function isStaticImageData(src) {
      return src.src !== void 0;
    }
    function isStaticImport(src) {
      return !!src && typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
    }
    var allImgs = /* @__PURE__ */ new Map();
    var perfObserver;
    function getInt(x) {
      if (typeof x === "undefined") {
        return x;
      }
      if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
      }
      if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
      }
      return NaN;
    }
    function getWidths(param, width, sizes) {
      let { deviceSizes, allSizes } = param;
      if (sizes) {
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for (let match; match = viewportWidthRe.exec(sizes); match) {
          percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
          const smallestRatio = Math.min(...percentSizes) * 0.01;
          return {
            widths: allSizes.filter((s) => s >= deviceSizes[0] * smallestRatio),
            kind: "w"
          };
        }
        return {
          widths: allSizes,
          kind: "w"
        };
      }
      if (typeof width !== "number") {
        return {
          widths: deviceSizes,
          kind: "w"
        };
      }
      const widths = [
        ...new Set(
          // > This means that most OLED screens that say they are 3x resolution,
          // > are actually 3x in the green color, but only 1.5x in the red and
          // > blue colors. Showing a 3x resolution image in the app vs a 2x
          // > resolution image will be visually the same, though the 3x image
          // > takes significantly more data. Even true 3x resolution screens are
          // > wasteful as the human eye cannot see that level of detail without
          // > something like a magnifying glass.
          // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
          [
            width,
            width * 2
            /*, width * 3*/
          ].map((w2) => allSizes.find((p) => p >= w2) || allSizes[allSizes.length - 1])
        )
      ];
      return {
        widths,
        kind: "x"
      };
    }
    function generateImgAttrs(param) {
      let { config, src, unoptimized, width, quality, sizes, loader } = param;
      if (unoptimized) {
        return {
          src,
          srcSet: void 0,
          sizes: void 0
        };
      }
      const { widths, kind } = getWidths(config, width, sizes);
      const last = widths.length - 1;
      return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w2, i) => loader({
          config,
          src,
          quality,
          width: w2
        }) + " " + (kind === "w" ? w2 : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
          config,
          src,
          quality,
          width: widths[last]
        })
      };
    }
    function getImgProps(param, _state) {
      let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
      const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
      let config;
      let c = imgConf || _imageconfig.imageConfigDefault;
      if ("allSizes" in c) {
        config = c;
      } else {
        var _c_qualities;
        const allSizes = [
          ...c.deviceSizes,
          ...c.imageSizes
        ].sort((a, b2) => a - b2);
        const deviceSizes = c.deviceSizes.sort((a, b2) => a - b2);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b2) => a - b2);
        config = {
          ...c,
          allSizes,
          deviceSizes,
          qualities
        };
      }
      if (typeof defaultLoader === "undefined") {
        throw Object.defineProperty(new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
          value: "E163",
          enumerable: false,
          configurable: true
        });
      }
      let loader = rest.loader || defaultLoader;
      delete rest.loader;
      delete rest.srcSet;
      const isDefaultLoader = "__next_img_default" in loader;
      if (isDefaultLoader) {
        if (config.loader === "custom") {
          throw Object.defineProperty(new Error('Image with src "' + src + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
            value: "E252",
            enumerable: false,
            configurable: true
          });
        }
      } else {
        const customImageLoader = loader;
        loader = (obj) => {
          const { config: _, ...opts } = obj;
          return customImageLoader(opts);
        };
      }
      if (layout) {
        if (layout === "fill") {
          fill = true;
        }
        const layoutToStyle = {
          intrinsic: {
            maxWidth: "100%",
            height: "auto"
          },
          responsive: {
            width: "100%",
            height: "auto"
          }
        };
        const layoutToSizes = {
          responsive: "100vw",
          fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
          style = {
            ...style,
            ...layoutStyle
          };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
          sizes = layoutSizes;
        }
      }
      let staticSrc = "";
      let widthInt = getInt(width);
      let heightInt = getInt(height);
      let blurWidth;
      let blurHeight;
      if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
          throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
            value: "E460",
            enumerable: false,
            configurable: true
          });
        }
        if (!staticImageData.height || !staticImageData.width) {
          throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
            value: "E48",
            enumerable: false,
            configurable: true
          });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
          if (!widthInt && !heightInt) {
            widthInt = staticImageData.width;
            heightInt = staticImageData.height;
          } else if (widthInt && !heightInt) {
            const ratio = widthInt / staticImageData.width;
            heightInt = Math.round(staticImageData.height * ratio);
          } else if (!widthInt && heightInt) {
            const ratio = heightInt / staticImageData.height;
            widthInt = Math.round(staticImageData.width * ratio);
          }
        }
      }
      src = typeof src === "string" ? src : staticSrc;
      let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
      if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        unoptimized = true;
        isLazy = false;
      }
      if (config.unoptimized) {
        unoptimized = true;
      }
      if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
        unoptimized = true;
      }
      const qualityInt = getInt(quality);
      if (process.env.NODE_ENV !== "production") {
        var _config_localPatterns;
        if (config.output === "export" && isDefaultLoader && !unoptimized) {
          throw Object.defineProperty(new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
            value: "E500",
            enumerable: false,
            configurable: true
          });
        }
        if (!src) {
          unoptimized = true;
        } else {
          if (fill) {
            if (width) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                value: "E96",
                enumerable: false,
                configurable: true
              });
            }
            if (height) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                value: "E115",
                enumerable: false,
                configurable: true
              });
            }
            if ((style == null ? void 0 : style.position) && style.position !== "absolute") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                value: "E216",
                enumerable: false,
                configurable: true
              });
            }
            if ((style == null ? void 0 : style.width) && style.width !== "100%") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                value: "E73",
                enumerable: false,
                configurable: true
              });
            }
            if ((style == null ? void 0 : style.height) && style.height !== "100%") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                value: "E404",
                enumerable: false,
                configurable: true
              });
            }
          } else {
            if (typeof widthInt === "undefined") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" is missing required "width" property.'), "__NEXT_ERROR_CODE", {
                value: "E451",
                enumerable: false,
                configurable: true
              });
            } else if (isNaN(widthInt)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".'), "__NEXT_ERROR_CODE", {
                value: "E66",
                enumerable: false,
                configurable: true
              });
            }
            if (typeof heightInt === "undefined") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" is missing required "height" property.'), "__NEXT_ERROR_CODE", {
                value: "E397",
                enumerable: false,
                configurable: true
              });
            } else if (isNaN(heightInt)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".'), "__NEXT_ERROR_CODE", {
                value: "E444",
                enumerable: false,
                configurable: true
              });
            }
            if (/^[\x00-\x20]/.test(src)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.'), "__NEXT_ERROR_CODE", {
                value: "E176",
                enumerable: false,
                configurable: true
              });
            }
            if (/[\x00-\x20]$/.test(src)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.'), "__NEXT_ERROR_CODE", {
                value: "E21",
                enumerable: false,
                configurable: true
              });
            }
          }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
          throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(",") + "."), "__NEXT_ERROR_CODE", {
            value: "E357",
            enumerable: false,
            configurable: true
          });
        }
        if (priority && loading === "lazy") {
          throw Object.defineProperty(new Error('Image with src "' + src + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E218",
            enumerable: false,
            configurable: true
          });
        }
        if (placeholder !== "empty" && placeholder !== "blur" && !placeholder.startsWith("data:image/")) {
          throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".'), "__NEXT_ERROR_CODE", {
            value: "E431",
            enumerable: false,
            configurable: true
          });
        }
        if (placeholder !== "empty") {
          if (widthInt && heightInt && widthInt * heightInt < 1600) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
          }
        }
        if (qualityInt && qualityInt !== 75 && !config.qualities) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using quality "' + qualityInt + '" which is not configured in images.qualities. This config will be required starting in Next.js 16.\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities');
        }
        if (src.startsWith("/") && src.includes("?") && (!(config == null ? void 0 : (_config_localPatterns = config.localPatterns) == null ? void 0 : _config_localPatterns.length) || config.localPatterns.length === 1 && config.localPatterns[0].pathname === "/_next/static/media/**")) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using a query string which is not configured in images.localPatterns. This config will be required starting in Next.js 16.\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns');
        }
        if (placeholder === "blur" && !blurDataURL) {
          const VALID_BLUR_EXT = [
            "jpeg",
            "png",
            "webp",
            "avif"
          ];
          throw Object.defineProperty(new Error('Image with src "' + src + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + VALID_BLUR_EXT.join(",") + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url'), "__NEXT_ERROR_CODE", {
            value: "E371",
            enumerable: false,
            configurable: true
          });
        }
        if ("ref" in rest) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
        }
        if (!unoptimized && !isDefaultLoader) {
          const urlStr = loader({
            config,
            src,
            width: widthInt || 400,
            quality: qualityInt || 75
          });
          let url;
          try {
            url = new URL(urlStr);
          } catch (err) {
          }
          if (urlStr === src || url && url.pathname === src && !url.search) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width');
          }
        }
        if (onLoadingComplete) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
        }
        for (const [legacyKey, legacyValue] of Object.entries({
          layout,
          objectFit,
          objectPosition,
          lazyBoundary,
          lazyRoot
        })) {
          if (legacyValue) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13');
          }
        }
        if (typeof window !== "undefined" && !perfObserver && window.PerformanceObserver) {
          perfObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              var _entry_element;
              const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || "";
              const lcpImage = allImgs.get(imgSrc);
              if (lcpImage && !lcpImage.priority && lcpImage.placeholder === "empty" && !lcpImage.src.startsWith("data:") && !lcpImage.src.startsWith("blob:")) {
                (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.\nRead more: https://nextjs.org/docs/api-reference/next/image#priority');
              }
            }
          });
          try {
            perfObserver.observe({
              type: "largest-contentful-paint",
              buffered: true
            });
          } catch (err) {
            console.error(err);
          }
        }
      }
      const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
      } : {}, showAltText ? {} : {
        color: "transparent"
      }, style);
      const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
      }) + '")' : 'url("' + placeholder + '")' : null;
      const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === "fill" ? "100% 100%" : "cover";
      let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
      } : {};
      if (process.env.NODE_ENV === "development") {
        if (placeholderStyle.backgroundImage && placeholder === "blur" && (blurDataURL == null ? void 0 : blurDataURL.startsWith("/"))) {
          placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
        }
      }
      const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
      });
      if (process.env.NODE_ENV !== "production") {
        if (typeof window !== "undefined") {
          let fullUrl;
          try {
            fullUrl = new URL(imgAttributes.src);
          } catch (e) {
            fullUrl = new URL(imgAttributes.src, window.location.href);
          }
          allImgs.set(fullUrl.href, {
            src,
            priority,
            placeholder
          });
        }
      }
      const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
          ...imgStyle,
          ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
      };
      const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
      };
      return {
        props,
        meta
      };
    }
  }
});

// ../node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "../node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports._ = _interop_require_wildcard;
  }
});

// ../node_modules/next/dist/shared/lib/side-effect.js
var require_side_effect = __commonJS({
  "../node_modules/next/dist/shared/lib/side-effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SideEffect;
      }
    });
    var _react = __require("react");
    var isServer = typeof window === "undefined";
    var useClientOnlyLayoutEffect = isServer ? () => {
    } : _react.useLayoutEffect;
    var useClientOnlyEffect = isServer ? () => {
    } : _react.useEffect;
    function SideEffect(props) {
      const { headManager, reduceComponentsToState } = props;
      function emitChange() {
        if (headManager && headManager.mountedInstances) {
          const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
          headManager.updateHead(reduceComponentsToState(headElements, props));
        }
      }
      if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
      }
      useClientOnlyLayoutEffect(() => {
        var _headManager_mountedInstances2;
        headManager == null ? void 0 : (_headManager_mountedInstances2 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances2.add(props.children);
        return () => {
          var _headManager_mountedInstances3;
          headManager == null ? void 0 : (_headManager_mountedInstances3 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances3.delete(props.children);
        };
      });
      useClientOnlyLayoutEffect(() => {
        if (headManager) {
          headManager._pendingUpdate = emitChange;
        }
        return () => {
          if (headManager) {
            headManager._pendingUpdate = emitChange;
          }
        };
      });
      useClientOnlyEffect(() => {
        if (headManager && headManager._pendingUpdate) {
          headManager._pendingUpdate();
          headManager._pendingUpdate = null;
        }
        return () => {
          if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
          }
        };
      });
      return null;
    }
  }
});

// ../node_modules/next/dist/shared/lib/amp-context.shared-runtime.js
var require_amp_context_shared_runtime = __commonJS({
  "../node_modules/next/dist/shared/lib/amp-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "AmpStateContext", {
      enumerable: true,
      get: function() {
        return AmpStateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var AmpStateContext = _react.default.createContext({});
    if (process.env.NODE_ENV !== "production") {
      AmpStateContext.displayName = "AmpStateContext";
    }
  }
});

// ../node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js
var require_head_manager_context_shared_runtime = __commonJS({
  "../node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "HeadManagerContext", {
      enumerable: true,
      get: function() {
        return HeadManagerContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var HeadManagerContext = _react.default.createContext({});
    if (process.env.NODE_ENV !== "production") {
      HeadManagerContext.displayName = "HeadManagerContext";
    }
  }
});

// ../node_modules/next/dist/shared/lib/amp-mode.js
var require_amp_mode = __commonJS({
  "../node_modules/next/dist/shared/lib/amp-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isInAmpMode", {
      enumerable: true,
      get: function() {
        return isInAmpMode;
      }
    });
    function isInAmpMode(param) {
      let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
      return ampFirst || hybrid && hasQuery;
    }
  }
});

// ../node_modules/next/dist/shared/lib/head.js
var require_head = __commonJS({
  "../node_modules/next/dist/shared/lib/head.js"(exports, module) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      defaultHead: function() {
        return defaultHead;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _sideeffect = /* @__PURE__ */ _interop_require_default._(require_side_effect());
    var _ampcontextsharedruntime = require_amp_context_shared_runtime();
    var _headmanagercontextsharedruntime = require_head_manager_context_shared_runtime();
    var _ampmode = require_amp_mode();
    var _warnonce = require_warn_once();
    function defaultHead(inAmpMode) {
      if (inAmpMode === void 0) inAmpMode = false;
      const head = [
        /* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
          charSet: "utf-8"
        }, "charset")
      ];
      if (!inAmpMode) {
        head.push(/* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        }, "viewport"));
      }
      return head;
    }
    function onlyReactElement(list, child) {
      if (typeof child === "string" || typeof child === "number") {
        return list;
      }
      if (child.type === _react.default.Fragment) {
        return list.concat(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          _react.default.Children.toArray(child.props.children).reduce(
            // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
            (fragmentList, fragmentChild) => {
              if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
              }
              return fragmentList.concat(fragmentChild);
            },
            []
          )
        );
      }
      return list.concat(child);
    }
    var METATYPES = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function unique() {
      const keys = /* @__PURE__ */ new Set();
      const tags = /* @__PURE__ */ new Set();
      const metaTypes = /* @__PURE__ */ new Set();
      const metaCategories = {};
      return (h) => {
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
          hasKey = true;
          const key = h.key.slice(h.key.indexOf("$") + 1);
          if (keys.has(key)) {
            isUnique = false;
          } else {
            keys.add(key);
          }
        }
        switch (h.type) {
          case "title":
          case "base":
            if (tags.has(h.type)) {
              isUnique = false;
            } else {
              tags.add(h.type);
            }
            break;
          case "meta":
            for (let i = 0, len = METATYPES.length; i < len; i++) {
              const metatype = METATYPES[i];
              if (!h.props.hasOwnProperty(metatype)) continue;
              if (metatype === "charSet") {
                if (metaTypes.has(metatype)) {
                  isUnique = false;
                } else {
                  metaTypes.add(metatype);
                }
              } else {
                const category = h.props[metatype];
                const categories2 = metaCategories[metatype] || /* @__PURE__ */ new Set();
                if ((metatype !== "name" || !hasKey) && categories2.has(category)) {
                  isUnique = false;
                } else {
                  categories2.add(category);
                  metaCategories[metatype] = categories2;
                }
              }
            }
            break;
        }
        return isUnique;
      };
    }
    function reduceComponents(headChildrenElements, props) {
      const { inAmpMode } = props;
      return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
        const key = c.key || i;
        if (process.env.NODE_ENV === "development") {
          if (c.type === "script" && c.props["type"] !== "application/ld+json") {
            const srcMessage = c.props["src"] ? '<script> tag with src="' + c.props["src"] + '"' : "inline <script>";
            (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
          } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
            (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props["href"] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
          }
        }
        return /* @__PURE__ */ _react.default.cloneElement(c, {
          key
        });
      });
    }
    function Head(param) {
      let { children } = param;
      const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
      const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
      return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children
      });
    }
    var _default = Head;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js
var require_image_config_context_shared_runtime = __commonJS({
  "../node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ImageConfigContext", {
      enumerable: true,
      get: function() {
        return ImageConfigContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var _imageconfig = require_image_config();
    var ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
    if (process.env.NODE_ENV !== "production") {
      ImageConfigContext.displayName = "ImageConfigContext";
    }
  }
});

// ../node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "../node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// ../node_modules/next/dist/compiled/picomatch/index.js
var require_picomatch = __commonJS({
  "../node_modules/next/dist/compiled/picomatch/index.js"(exports, module) {
    "use strict";
    (() => {
      "use strict";
      var t = { 170: (t2, e2, u3) => {
        const n = u3(510);
        const isWindows = () => {
          if (typeof navigator !== "undefined" && navigator.platform) {
            const t3 = navigator.platform.toLowerCase();
            return t3 === "win32" || t3 === "windows";
          }
          if (typeof process !== "undefined" && process.platform) {
            return process.platform === "win32";
          }
          return false;
        };
        function picomatch(t3, e3, u4 = false) {
          if (e3 && (e3.windows === null || e3.windows === void 0)) {
            e3 = { ...e3, windows: isWindows() };
          }
          return n(t3, e3, u4);
        }
        Object.assign(picomatch, n);
        t2.exports = picomatch;
      }, 154: (t2) => {
        const e2 = "\\\\/";
        const u3 = `[^${e2}]`;
        const n = "\\.";
        const o = "\\+";
        const s = "\\?";
        const r = "\\/";
        const a = "(?=.)";
        const i = "[^/]";
        const c = `(?:${r}|$)`;
        const p = `(?:^|${r})`;
        const l2 = `${n}{1,2}${c}`;
        const f2 = `(?!${n})`;
        const A2 = `(?!${p}${l2})`;
        const _ = `(?!${n}{0,1}${c})`;
        const R2 = `(?!${l2})`;
        const E2 = `[^.${r}]`;
        const h = `${i}*?`;
        const g = "/";
        const b2 = { DOT_LITERAL: n, PLUS_LITERAL: o, QMARK_LITERAL: s, SLASH_LITERAL: r, ONE_CHAR: a, QMARK: i, END_ANCHOR: c, DOTS_SLASH: l2, NO_DOT: f2, NO_DOTS: A2, NO_DOT_SLASH: _, NO_DOTS_SLASH: R2, QMARK_NO_DOT: E2, STAR: h, START_ANCHOR: p, SEP: g };
        const C = { ...b2, SLASH_LITERAL: `[${e2}]`, QMARK: u3, STAR: `${u3}*?`, DOTS_SLASH: `${n}{1,2}(?:[${e2}]|$)`, NO_DOT: `(?!${n})`, NO_DOTS: `(?!(?:^|[${e2}])${n}{1,2}(?:[${e2}]|$))`, NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e2}]|$))`, NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e2}]|$))`, QMARK_NO_DOT: `[^.${e2}]`, START_ANCHOR: `(?:^|[${e2}])`, END_ANCHOR: `(?:[${e2}]|$)`, SEP: "\\" };
        const y = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
        t2.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: y, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(t3) {
          return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${t3.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
        }, globChars(t3) {
          return t3 === true ? C : b2;
        } };
      }, 697: (t2, e2, u3) => {
        const n = u3(154);
        const o = u3(96);
        const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
        const expandRange = (t3, e3) => {
          if (typeof e3.expandRange === "function") {
            return e3.expandRange(...t3, e3);
          }
          t3.sort();
          const u4 = `[${t3.join("-")}]`;
          try {
            new RegExp(u4);
          } catch (e4) {
            return t3.map(((t4) => o.escapeRegex(t4))).join("..");
          }
          return u4;
        };
        const syntaxError = (t3, e3) => `Missing ${t3}: "${e3}" - use "\\\\${e3}" to match literal characters`;
        const parse2 = (t3, e3) => {
          if (typeof t3 !== "string") {
            throw new TypeError("Expected a string");
          }
          t3 = c[t3] || t3;
          const u4 = { ...e3 };
          const p = typeof u4.maxLength === "number" ? Math.min(s, u4.maxLength) : s;
          let l2 = t3.length;
          if (l2 > p) {
            throw new SyntaxError(`Input length: ${l2}, exceeds maximum allowed length: ${p}`);
          }
          const f2 = { type: "bos", value: "", output: u4.prepend || "" };
          const A2 = [f2];
          const _ = u4.capture ? "" : "?:";
          const R2 = n.globChars(u4.windows);
          const E2 = n.extglobChars(R2);
          const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b2, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $2, NO_DOT_SLASH: x, NO_DOTS_SLASH: S2, QMARK: H2, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L2 } = R2;
          const globstar = (t4) => `(${_}(?:(?!${L2}${t4.dot ? y : h}).)*?)`;
          const T = u4.dot ? "" : $2;
          const O2 = u4.dot ? H2 : v;
          let k2 = u4.bash === true ? globstar(u4) : d;
          if (u4.capture) {
            k2 = `(${k2})`;
          }
          if (typeof u4.noext === "boolean") {
            u4.noextglob = u4.noext;
          }
          const m2 = { input: t3, index: -1, start: 0, dot: u4.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: A2 };
          t3 = o.removePrefix(t3, m2);
          l2 = t3.length;
          const w2 = [];
          const N2 = [];
          const I2 = [];
          let B2 = f2;
          let G2;
          const eos = () => m2.index === l2 - 1;
          const D2 = m2.peek = (e4 = 1) => t3[m2.index + e4];
          const M2 = m2.advance = () => t3[++m2.index] || "";
          const remaining = () => t3.slice(m2.index + 1);
          const consume = (t4 = "", e4 = 0) => {
            m2.consumed += t4;
            m2.index += e4;
          };
          const append = (t4) => {
            m2.output += t4.output != null ? t4.output : t4.value;
            consume(t4.value);
          };
          const negate = () => {
            let t4 = 1;
            while (D2() === "!" && (D2(2) !== "(" || D2(3) === "?")) {
              M2();
              m2.start++;
              t4++;
            }
            if (t4 % 2 === 0) {
              return false;
            }
            m2.negated = true;
            m2.start++;
            return true;
          };
          const increment = (t4) => {
            m2[t4]++;
            I2.push(t4);
          };
          const decrement = (t4) => {
            m2[t4]--;
            I2.pop();
          };
          const push = (t4) => {
            if (B2.type === "globstar") {
              const e4 = m2.braces > 0 && (t4.type === "comma" || t4.type === "brace");
              const u5 = t4.extglob === true || w2.length && (t4.type === "pipe" || t4.type === "paren");
              if (t4.type !== "slash" && t4.type !== "paren" && !e4 && !u5) {
                m2.output = m2.output.slice(0, -B2.output.length);
                B2.type = "star";
                B2.value = "*";
                B2.output = k2;
                m2.output += B2.output;
              }
            }
            if (w2.length && t4.type !== "paren") {
              w2[w2.length - 1].inner += t4.value;
            }
            if (t4.value || t4.output) append(t4);
            if (B2 && B2.type === "text" && t4.type === "text") {
              B2.output = (B2.output || B2.value) + t4.value;
              B2.value += t4.value;
              return;
            }
            t4.prev = B2;
            A2.push(t4);
            B2 = t4;
          };
          const extglobOpen = (t4, e4) => {
            const n2 = { ...E2[e4], conditions: 1, inner: "" };
            n2.prev = B2;
            n2.parens = m2.parens;
            n2.output = m2.output;
            const o2 = (u4.capture ? "(" : "") + n2.open;
            increment("parens");
            push({ type: t4, value: e4, output: m2.output ? "" : C });
            push({ type: "paren", extglob: true, value: M2(), output: o2 });
            w2.push(n2);
          };
          const extglobClose = (t4) => {
            let n2 = t4.close + (u4.capture ? ")" : "");
            let o2;
            if (t4.type === "negate") {
              let s2 = k2;
              if (t4.inner && t4.inner.length > 1 && t4.inner.includes("/")) {
                s2 = globstar(u4);
              }
              if (s2 !== k2 || eos() || /^\)+$/.test(remaining())) {
                n2 = t4.close = `)$))${s2}`;
              }
              if (t4.inner.includes("*") && (o2 = remaining()) && /^\.[^\\/.]+$/.test(o2)) {
                const u5 = parse2(o2, { ...e3, fastpaths: false }).output;
                n2 = t4.close = `)${u5})${s2})`;
              }
              if (t4.prev.type === "bos") {
                m2.negatedExtglob = true;
              }
            }
            push({ type: "paren", extglob: true, value: G2, output: n2 });
            decrement("parens");
          };
          if (u4.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t3)) {
            let n2 = false;
            let s2 = t3.replace(i, ((t4, e4, u5, o2, s3, r2) => {
              if (o2 === "\\") {
                n2 = true;
                return t4;
              }
              if (o2 === "?") {
                if (e4) {
                  return e4 + o2 + (s3 ? H2.repeat(s3.length) : "");
                }
                if (r2 === 0) {
                  return O2 + (s3 ? H2.repeat(s3.length) : "");
                }
                return H2.repeat(u5.length);
              }
              if (o2 === ".") {
                return h.repeat(u5.length);
              }
              if (o2 === "*") {
                if (e4) {
                  return e4 + o2 + (s3 ? k2 : "");
                }
                return k2;
              }
              return e4 ? t4 : `\\${t4}`;
            }));
            if (n2 === true) {
              if (u4.unescape === true) {
                s2 = s2.replace(/\\/g, "");
              } else {
                s2 = s2.replace(/\\+/g, ((t4) => t4.length % 2 === 0 ? "\\\\" : t4 ? "\\" : ""));
              }
            }
            if (s2 === t3 && u4.contains === true) {
              m2.output = t3;
              return m2;
            }
            m2.output = o.wrapOutput(s2, m2, e3);
            return m2;
          }
          while (!eos()) {
            G2 = M2();
            if (G2 === "\0") {
              continue;
            }
            if (G2 === "\\") {
              const t4 = D2();
              if (t4 === "/" && u4.bash !== true) {
                continue;
              }
              if (t4 === "." || t4 === ";") {
                continue;
              }
              if (!t4) {
                G2 += "\\";
                push({ type: "text", value: G2 });
                continue;
              }
              const e5 = /^\\+/.exec(remaining());
              let n3 = 0;
              if (e5 && e5[0].length > 2) {
                n3 = e5[0].length;
                m2.index += n3;
                if (n3 % 2 !== 0) {
                  G2 += "\\";
                }
              }
              if (u4.unescape === true) {
                G2 = M2();
              } else {
                G2 += M2();
              }
              if (m2.brackets === 0) {
                push({ type: "text", value: G2 });
                continue;
              }
            }
            if (m2.brackets > 0 && (G2 !== "]" || B2.value === "[" || B2.value === "[^")) {
              if (u4.posix !== false && G2 === ":") {
                const t4 = B2.value.slice(1);
                if (t4.includes("[")) {
                  B2.posix = true;
                  if (t4.includes(":")) {
                    const t5 = B2.value.lastIndexOf("[");
                    const e5 = B2.value.slice(0, t5);
                    const u5 = B2.value.slice(t5 + 2);
                    const n3 = r[u5];
                    if (n3) {
                      B2.value = e5 + n3;
                      m2.backtrack = true;
                      M2();
                      if (!f2.output && A2.indexOf(B2) === 1) {
                        f2.output = C;
                      }
                      continue;
                    }
                  }
                }
              }
              if (G2 === "[" && D2() !== ":" || G2 === "-" && D2() === "]") {
                G2 = `\\${G2}`;
              }
              if (G2 === "]" && (B2.value === "[" || B2.value === "[^")) {
                G2 = `\\${G2}`;
              }
              if (u4.posix === true && G2 === "!" && B2.value === "[") {
                G2 = "^";
              }
              B2.value += G2;
              append({ value: G2 });
              continue;
            }
            if (m2.quotes === 1 && G2 !== '"') {
              G2 = o.escapeRegex(G2);
              B2.value += G2;
              append({ value: G2 });
              continue;
            }
            if (G2 === '"') {
              m2.quotes = m2.quotes === 1 ? 0 : 1;
              if (u4.keepQuotes === true) {
                push({ type: "text", value: G2 });
              }
              continue;
            }
            if (G2 === "(") {
              increment("parens");
              push({ type: "paren", value: G2 });
              continue;
            }
            if (G2 === ")") {
              if (m2.parens === 0 && u4.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "("));
              }
              const t4 = w2[w2.length - 1];
              if (t4 && m2.parens === t4.parens + 1) {
                extglobClose(w2.pop());
                continue;
              }
              push({ type: "paren", value: G2, output: m2.parens ? ")" : "\\)" });
              decrement("parens");
              continue;
            }
            if (G2 === "[") {
              if (u4.nobracket === true || !remaining().includes("]")) {
                if (u4.nobracket !== true && u4.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("closing", "]"));
                }
                G2 = `\\${G2}`;
              } else {
                increment("brackets");
              }
              push({ type: "bracket", value: G2 });
              continue;
            }
            if (G2 === "]") {
              if (u4.nobracket === true || B2 && B2.type === "bracket" && B2.value.length === 1) {
                push({ type: "text", value: G2, output: `\\${G2}` });
                continue;
              }
              if (m2.brackets === 0) {
                if (u4.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("opening", "["));
                }
                push({ type: "text", value: G2, output: `\\${G2}` });
                continue;
              }
              decrement("brackets");
              const t4 = B2.value.slice(1);
              if (B2.posix !== true && t4[0] === "^" && !t4.includes("/")) {
                G2 = `/${G2}`;
              }
              B2.value += G2;
              append({ value: G2 });
              if (u4.literalBrackets === false || o.hasRegexChars(t4)) {
                continue;
              }
              const e5 = o.escapeRegex(B2.value);
              m2.output = m2.output.slice(0, -B2.value.length);
              if (u4.literalBrackets === true) {
                m2.output += e5;
                B2.value = e5;
                continue;
              }
              B2.value = `(${_}${e5}|${B2.value})`;
              m2.output += B2.value;
              continue;
            }
            if (G2 === "{" && u4.nobrace !== true) {
              increment("braces");
              const t4 = { type: "brace", value: G2, output: "(", outputIndex: m2.output.length, tokensIndex: m2.tokens.length };
              N2.push(t4);
              push(t4);
              continue;
            }
            if (G2 === "}") {
              const t4 = N2[N2.length - 1];
              if (u4.nobrace === true || !t4) {
                push({ type: "text", value: G2, output: G2 });
                continue;
              }
              let e5 = ")";
              if (t4.dots === true) {
                const t5 = A2.slice();
                const n3 = [];
                for (let e6 = t5.length - 1; e6 >= 0; e6--) {
                  A2.pop();
                  if (t5[e6].type === "brace") {
                    break;
                  }
                  if (t5[e6].type !== "dots") {
                    n3.unshift(t5[e6].value);
                  }
                }
                e5 = expandRange(n3, u4);
                m2.backtrack = true;
              }
              if (t4.comma !== true && t4.dots !== true) {
                const u5 = m2.output.slice(0, t4.outputIndex);
                const n3 = m2.tokens.slice(t4.tokensIndex);
                t4.value = t4.output = "\\{";
                G2 = e5 = "\\}";
                m2.output = u5;
                for (const t5 of n3) {
                  m2.output += t5.output || t5.value;
                }
              }
              push({ type: "brace", value: G2, output: e5 });
              decrement("braces");
              N2.pop();
              continue;
            }
            if (G2 === "|") {
              if (w2.length > 0) {
                w2[w2.length - 1].conditions++;
              }
              push({ type: "text", value: G2 });
              continue;
            }
            if (G2 === ",") {
              let t4 = G2;
              const e5 = N2[N2.length - 1];
              if (e5 && I2[I2.length - 1] === "braces") {
                e5.comma = true;
                t4 = "|";
              }
              push({ type: "comma", value: G2, output: t4 });
              continue;
            }
            if (G2 === "/") {
              if (B2.type === "dot" && m2.index === m2.start + 1) {
                m2.start = m2.index + 1;
                m2.consumed = "";
                m2.output = "";
                A2.pop();
                B2 = f2;
                continue;
              }
              push({ type: "slash", value: G2, output: b2 });
              continue;
            }
            if (G2 === ".") {
              if (m2.braces > 0 && B2.type === "dot") {
                if (B2.value === ".") B2.output = h;
                const t4 = N2[N2.length - 1];
                B2.type = "dots";
                B2.output += G2;
                B2.value += G2;
                t4.dots = true;
                continue;
              }
              if (m2.braces + m2.parens === 0 && B2.type !== "bos" && B2.type !== "slash") {
                push({ type: "text", value: G2, output: h });
                continue;
              }
              push({ type: "dot", value: G2, output: h });
              continue;
            }
            if (G2 === "?") {
              const t4 = B2 && B2.value === "(";
              if (!t4 && u4.noextglob !== true && D2() === "(" && D2(2) !== "?") {
                extglobOpen("qmark", G2);
                continue;
              }
              if (B2 && B2.type === "paren") {
                const t5 = D2();
                let e5 = G2;
                if (B2.value === "(" && !/[!=<:]/.test(t5) || t5 === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                  e5 = `\\${G2}`;
                }
                push({ type: "text", value: G2, output: e5 });
                continue;
              }
              if (u4.dot !== true && (B2.type === "slash" || B2.type === "bos")) {
                push({ type: "qmark", value: G2, output: v });
                continue;
              }
              push({ type: "qmark", value: G2, output: H2 });
              continue;
            }
            if (G2 === "!") {
              if (u4.noextglob !== true && D2() === "(") {
                if (D2(2) !== "?" || !/[!=<:]/.test(D2(3))) {
                  extglobOpen("negate", G2);
                  continue;
                }
              }
              if (u4.nonegate !== true && m2.index === 0) {
                negate();
                continue;
              }
            }
            if (G2 === "+") {
              if (u4.noextglob !== true && D2() === "(" && D2(2) !== "?") {
                extglobOpen("plus", G2);
                continue;
              }
              if (B2 && B2.value === "(" || u4.regex === false) {
                push({ type: "plus", value: G2, output: g });
                continue;
              }
              if (B2 && (B2.type === "bracket" || B2.type === "paren" || B2.type === "brace") || m2.parens > 0) {
                push({ type: "plus", value: G2 });
                continue;
              }
              push({ type: "plus", value: g });
              continue;
            }
            if (G2 === "@") {
              if (u4.noextglob !== true && D2() === "(" && D2(2) !== "?") {
                push({ type: "at", extglob: true, value: G2, output: "" });
                continue;
              }
              push({ type: "text", value: G2 });
              continue;
            }
            if (G2 !== "*") {
              if (G2 === "$" || G2 === "^") {
                G2 = `\\${G2}`;
              }
              const t4 = a.exec(remaining());
              if (t4) {
                G2 += t4[0];
                m2.index += t4[0].length;
              }
              push({ type: "text", value: G2 });
              continue;
            }
            if (B2 && (B2.type === "globstar" || B2.star === true)) {
              B2.type = "star";
              B2.star = true;
              B2.value += G2;
              B2.output = k2;
              m2.backtrack = true;
              m2.globstar = true;
              consume(G2);
              continue;
            }
            let e4 = remaining();
            if (u4.noextglob !== true && /^\([^?]/.test(e4)) {
              extglobOpen("star", G2);
              continue;
            }
            if (B2.type === "star") {
              if (u4.noglobstar === true) {
                consume(G2);
                continue;
              }
              const n3 = B2.prev;
              const o2 = n3.prev;
              const s2 = n3.type === "slash" || n3.type === "bos";
              const r2 = o2 && (o2.type === "star" || o2.type === "globstar");
              if (u4.bash === true && (!s2 || e4[0] && e4[0] !== "/")) {
                push({ type: "star", value: G2, output: "" });
                continue;
              }
              const a2 = m2.braces > 0 && (n3.type === "comma" || n3.type === "brace");
              const i2 = w2.length && (n3.type === "pipe" || n3.type === "paren");
              if (!s2 && n3.type !== "paren" && !a2 && !i2) {
                push({ type: "star", value: G2, output: "" });
                continue;
              }
              while (e4.slice(0, 3) === "/**") {
                const u5 = t3[m2.index + 4];
                if (u5 && u5 !== "/") {
                  break;
                }
                e4 = e4.slice(3);
                consume("/**", 3);
              }
              if (n3.type === "bos" && eos()) {
                B2.type = "globstar";
                B2.value += G2;
                B2.output = globstar(u4);
                m2.output = B2.output;
                m2.globstar = true;
                consume(G2);
                continue;
              }
              if (n3.type === "slash" && n3.prev.type !== "bos" && !r2 && eos()) {
                m2.output = m2.output.slice(0, -(n3.output + B2.output).length);
                n3.output = `(?:${n3.output}`;
                B2.type = "globstar";
                B2.output = globstar(u4) + (u4.strictSlashes ? ")" : "|$)");
                B2.value += G2;
                m2.globstar = true;
                m2.output += n3.output + B2.output;
                consume(G2);
                continue;
              }
              if (n3.type === "slash" && n3.prev.type !== "bos" && e4[0] === "/") {
                const t4 = e4[1] !== void 0 ? "|$" : "";
                m2.output = m2.output.slice(0, -(n3.output + B2.output).length);
                n3.output = `(?:${n3.output}`;
                B2.type = "globstar";
                B2.output = `${globstar(u4)}${b2}|${b2}${t4})`;
                B2.value += G2;
                m2.output += n3.output + B2.output;
                m2.globstar = true;
                consume(G2 + M2());
                push({ type: "slash", value: "/", output: "" });
                continue;
              }
              if (n3.type === "bos" && e4[0] === "/") {
                B2.type = "globstar";
                B2.value += G2;
                B2.output = `(?:^|${b2}|${globstar(u4)}${b2})`;
                m2.output = B2.output;
                m2.globstar = true;
                consume(G2 + M2());
                push({ type: "slash", value: "/", output: "" });
                continue;
              }
              m2.output = m2.output.slice(0, -B2.output.length);
              B2.type = "globstar";
              B2.output = globstar(u4);
              B2.value += G2;
              m2.output += B2.output;
              m2.globstar = true;
              consume(G2);
              continue;
            }
            const n2 = { type: "star", value: G2, output: k2 };
            if (u4.bash === true) {
              n2.output = ".*?";
              if (B2.type === "bos" || B2.type === "slash") {
                n2.output = T + n2.output;
              }
              push(n2);
              continue;
            }
            if (B2 && (B2.type === "bracket" || B2.type === "paren") && u4.regex === true) {
              n2.output = G2;
              push(n2);
              continue;
            }
            if (m2.index === m2.start || B2.type === "slash" || B2.type === "dot") {
              if (B2.type === "dot") {
                m2.output += x;
                B2.output += x;
              } else if (u4.dot === true) {
                m2.output += S2;
                B2.output += S2;
              } else {
                m2.output += T;
                B2.output += T;
              }
              if (D2() !== "*") {
                m2.output += C;
                B2.output += C;
              }
            }
            push(n2);
          }
          while (m2.brackets > 0) {
            if (u4.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
            m2.output = o.escapeLast(m2.output, "[");
            decrement("brackets");
          }
          while (m2.parens > 0) {
            if (u4.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
            m2.output = o.escapeLast(m2.output, "(");
            decrement("parens");
          }
          while (m2.braces > 0) {
            if (u4.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
            m2.output = o.escapeLast(m2.output, "{");
            decrement("braces");
          }
          if (u4.strictSlashes !== true && (B2.type === "star" || B2.type === "bracket")) {
            push({ type: "maybe_slash", value: "", output: `${b2}?` });
          }
          if (m2.backtrack === true) {
            m2.output = "";
            for (const t4 of m2.tokens) {
              m2.output += t4.output != null ? t4.output : t4.value;
              if (t4.suffix) {
                m2.output += t4.suffix;
              }
            }
          }
          return m2;
        };
        parse2.fastpaths = (t3, e3) => {
          const u4 = { ...e3 };
          const r2 = typeof u4.maxLength === "number" ? Math.min(s, u4.maxLength) : s;
          const a2 = t3.length;
          if (a2 > r2) {
            throw new SyntaxError(`Input length: ${a2}, exceeds maximum allowed length: ${r2}`);
          }
          t3 = c[t3] || t3;
          const { DOT_LITERAL: i2, SLASH_LITERAL: p, ONE_CHAR: l2, DOTS_SLASH: f2, NO_DOT: A2, NO_DOTS: _, NO_DOTS_SLASH: R2, STAR: E2, START_ANCHOR: h } = n.globChars(u4.windows);
          const g = u4.dot ? _ : A2;
          const b2 = u4.dot ? R2 : A2;
          const C = u4.capture ? "" : "?:";
          const y = { negated: false, prefix: "" };
          let $2 = u4.bash === true ? ".*?" : E2;
          if (u4.capture) {
            $2 = `(${$2})`;
          }
          const globstar = (t4) => {
            if (t4.noglobstar === true) return $2;
            return `(${C}(?:(?!${h}${t4.dot ? f2 : i2}).)*?)`;
          };
          const create = (t4) => {
            switch (t4) {
              case "*":
                return `${g}${l2}${$2}`;
              case ".*":
                return `${i2}${l2}${$2}`;
              case "*.*":
                return `${g}${$2}${i2}${l2}${$2}`;
              case "*/*":
                return `${g}${$2}${p}${l2}${b2}${$2}`;
              case "**":
                return g + globstar(u4);
              case "**/*":
                return `(?:${g}${globstar(u4)}${p})?${b2}${l2}${$2}`;
              case "**/*.*":
                return `(?:${g}${globstar(u4)}${p})?${b2}${$2}${i2}${l2}${$2}`;
              case "**/.*":
                return `(?:${g}${globstar(u4)}${p})?${i2}${l2}${$2}`;
              default: {
                const e4 = /^(.*?)\.(\w+)$/.exec(t4);
                if (!e4) return;
                const u5 = create(e4[1]);
                if (!u5) return;
                return u5 + i2 + e4[2];
              }
            }
          };
          const x = o.removePrefix(t3, y);
          let S2 = create(x);
          if (S2 && u4.strictSlashes !== true) {
            S2 += `${p}?`;
          }
          return S2;
        };
        t2.exports = parse2;
      }, 510: (t2, e2, u3) => {
        const n = u3(716);
        const o = u3(697);
        const s = u3(96);
        const r = u3(154);
        const isObject = (t3) => t3 && typeof t3 === "object" && !Array.isArray(t3);
        const picomatch = (t3, e3, u4 = false) => {
          if (Array.isArray(t3)) {
            const n3 = t3.map(((t4) => picomatch(t4, e3, u4)));
            const arrayMatcher = (t4) => {
              for (const e4 of n3) {
                const u5 = e4(t4);
                if (u5) return u5;
              }
              return false;
            };
            return arrayMatcher;
          }
          const n2 = isObject(t3) && t3.tokens && t3.input;
          if (t3 === "" || typeof t3 !== "string" && !n2) {
            throw new TypeError("Expected pattern to be a non-empty string");
          }
          const o2 = e3 || {};
          const s2 = o2.windows;
          const r2 = n2 ? picomatch.compileRe(t3, e3) : picomatch.makeRe(t3, e3, false, true);
          const a = r2.state;
          delete r2.state;
          let isIgnored = () => false;
          if (o2.ignore) {
            const t4 = { ...e3, ignore: null, onMatch: null, onResult: null };
            isIgnored = picomatch(o2.ignore, t4, u4);
          }
          const matcher = (u5, n3 = false) => {
            const { isMatch: i, match: c, output: p } = picomatch.test(u5, r2, e3, { glob: t3, posix: s2 });
            const l2 = { glob: t3, state: a, regex: r2, posix: s2, input: u5, output: p, match: c, isMatch: i };
            if (typeof o2.onResult === "function") {
              o2.onResult(l2);
            }
            if (i === false) {
              l2.isMatch = false;
              return n3 ? l2 : false;
            }
            if (isIgnored(u5)) {
              if (typeof o2.onIgnore === "function") {
                o2.onIgnore(l2);
              }
              l2.isMatch = false;
              return n3 ? l2 : false;
            }
            if (typeof o2.onMatch === "function") {
              o2.onMatch(l2);
            }
            return n3 ? l2 : true;
          };
          if (u4) {
            matcher.state = a;
          }
          return matcher;
        };
        picomatch.test = (t3, e3, u4, { glob: n2, posix: o2 } = {}) => {
          if (typeof t3 !== "string") {
            throw new TypeError("Expected input to be a string");
          }
          if (t3 === "") {
            return { isMatch: false, output: "" };
          }
          const r2 = u4 || {};
          const a = r2.format || (o2 ? s.toPosixSlashes : null);
          let i = t3 === n2;
          let c = i && a ? a(t3) : t3;
          if (i === false) {
            c = a ? a(t3) : t3;
            i = c === n2;
          }
          if (i === false || r2.capture === true) {
            if (r2.matchBase === true || r2.basename === true) {
              i = picomatch.matchBase(t3, e3, u4, o2);
            } else {
              i = e3.exec(c);
            }
          }
          return { isMatch: Boolean(i), match: i, output: c };
        };
        picomatch.matchBase = (t3, e3, u4) => {
          const n2 = e3 instanceof RegExp ? e3 : picomatch.makeRe(e3, u4);
          return n2.test(s.basename(t3));
        };
        picomatch.isMatch = (t3, e3, u4) => picomatch(e3, u4)(t3);
        picomatch.parse = (t3, e3) => {
          if (Array.isArray(t3)) return t3.map(((t4) => picomatch.parse(t4, e3)));
          return o(t3, { ...e3, fastpaths: false });
        };
        picomatch.scan = (t3, e3) => n(t3, e3);
        picomatch.compileRe = (t3, e3, u4 = false, n2 = false) => {
          if (u4 === true) {
            return t3.output;
          }
          const o2 = e3 || {};
          const s2 = o2.contains ? "" : "^";
          const r2 = o2.contains ? "" : "$";
          let a = `${s2}(?:${t3.output})${r2}`;
          if (t3 && t3.negated === true) {
            a = `^(?!${a}).*$`;
          }
          const i = picomatch.toRegex(a, e3);
          if (n2 === true) {
            i.state = t3;
          }
          return i;
        };
        picomatch.makeRe = (t3, e3 = {}, u4 = false, n2 = false) => {
          if (!t3 || typeof t3 !== "string") {
            throw new TypeError("Expected a non-empty string");
          }
          let s2 = { negated: false, fastpaths: true };
          if (e3.fastpaths !== false && (t3[0] === "." || t3[0] === "*")) {
            s2.output = o.fastpaths(t3, e3);
          }
          if (!s2.output) {
            s2 = o(t3, e3);
          }
          return picomatch.compileRe(s2, e3, u4, n2);
        };
        picomatch.toRegex = (t3, e3) => {
          try {
            const u4 = e3 || {};
            return new RegExp(t3, u4.flags || (u4.nocase ? "i" : ""));
          } catch (t4) {
            if (e3 && e3.debug === true) throw t4;
            return /$^/;
          }
        };
        picomatch.constants = r;
        t2.exports = picomatch;
      }, 716: (t2, e2, u3) => {
        const n = u3(96);
        const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l2, CHAR_LEFT_PARENTHESES: f2, CHAR_LEFT_SQUARE_BRACKET: A2, CHAR_PLUS: _, CHAR_QUESTION_MARK: R2, CHAR_RIGHT_CURLY_BRACE: E2, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u3(154);
        const isPathSeparator = (t3) => t3 === p || t3 === r;
        const depth = (t3) => {
          if (t3.isPrefix !== true) {
            t3.depth = t3.isGlobstar ? Infinity : 1;
          }
        };
        const scan = (t3, e3) => {
          const u4 = e3 || {};
          const b2 = t3.length - 1;
          const C = u4.parts === true || u4.scanToEnd === true;
          const y = [];
          const $2 = [];
          const x = [];
          let S2 = t3;
          let H2 = -1;
          let v = 0;
          let d = 0;
          let L2 = false;
          let T = false;
          let O2 = false;
          let k2 = false;
          let m2 = false;
          let w2 = false;
          let N2 = false;
          let I2 = false;
          let B2 = false;
          let G2 = false;
          let D2 = 0;
          let M2;
          let P2;
          let K2 = { value: "", depth: 0, isGlob: false };
          const eos = () => H2 >= b2;
          const peek = () => S2.charCodeAt(H2 + 1);
          const advance = () => {
            M2 = P2;
            return S2.charCodeAt(++H2);
          };
          while (H2 < b2) {
            P2 = advance();
            let t4;
            if (P2 === r) {
              N2 = K2.backslashes = true;
              P2 = advance();
              if (P2 === l2) {
                w2 = true;
              }
              continue;
            }
            if (w2 === true || P2 === l2) {
              D2++;
              while (eos() !== true && (P2 = advance())) {
                if (P2 === r) {
                  N2 = K2.backslashes = true;
                  advance();
                  continue;
                }
                if (P2 === l2) {
                  D2++;
                  continue;
                }
                if (w2 !== true && P2 === i && (P2 = advance()) === i) {
                  L2 = K2.isBrace = true;
                  O2 = K2.isGlob = true;
                  G2 = true;
                  if (C === true) {
                    continue;
                  }
                  break;
                }
                if (w2 !== true && P2 === a) {
                  L2 = K2.isBrace = true;
                  O2 = K2.isGlob = true;
                  G2 = true;
                  if (C === true) {
                    continue;
                  }
                  break;
                }
                if (P2 === E2) {
                  D2--;
                  if (D2 === 0) {
                    w2 = false;
                    L2 = K2.isBrace = true;
                    G2 = true;
                    break;
                  }
                }
              }
              if (C === true) {
                continue;
              }
              break;
            }
            if (P2 === p) {
              y.push(H2);
              $2.push(K2);
              K2 = { value: "", depth: 0, isGlob: false };
              if (G2 === true) continue;
              if (M2 === i && H2 === v + 1) {
                v += 2;
                continue;
              }
              d = H2 + 1;
              continue;
            }
            if (u4.noext !== true) {
              const t5 = P2 === _ || P2 === s || P2 === o || P2 === R2 || P2 === c;
              if (t5 === true && peek() === f2) {
                O2 = K2.isGlob = true;
                k2 = K2.isExtglob = true;
                G2 = true;
                if (P2 === c && H2 === v) {
                  B2 = true;
                }
                if (C === true) {
                  while (eos() !== true && (P2 = advance())) {
                    if (P2 === r) {
                      N2 = K2.backslashes = true;
                      P2 = advance();
                      continue;
                    }
                    if (P2 === h) {
                      O2 = K2.isGlob = true;
                      G2 = true;
                      break;
                    }
                  }
                  continue;
                }
                break;
              }
            }
            if (P2 === o) {
              if (M2 === o) m2 = K2.isGlobstar = true;
              O2 = K2.isGlob = true;
              G2 = true;
              if (C === true) {
                continue;
              }
              break;
            }
            if (P2 === R2) {
              O2 = K2.isGlob = true;
              G2 = true;
              if (C === true) {
                continue;
              }
              break;
            }
            if (P2 === A2) {
              while (eos() !== true && (t4 = advance())) {
                if (t4 === r) {
                  N2 = K2.backslashes = true;
                  advance();
                  continue;
                }
                if (t4 === g) {
                  T = K2.isBracket = true;
                  O2 = K2.isGlob = true;
                  G2 = true;
                  break;
                }
              }
              if (C === true) {
                continue;
              }
              break;
            }
            if (u4.nonegate !== true && P2 === c && H2 === v) {
              I2 = K2.negated = true;
              v++;
              continue;
            }
            if (u4.noparen !== true && P2 === f2) {
              O2 = K2.isGlob = true;
              if (C === true) {
                while (eos() !== true && (P2 = advance())) {
                  if (P2 === f2) {
                    N2 = K2.backslashes = true;
                    P2 = advance();
                    continue;
                  }
                  if (P2 === h) {
                    G2 = true;
                    break;
                  }
                }
                continue;
              }
              break;
            }
            if (O2 === true) {
              G2 = true;
              if (C === true) {
                continue;
              }
              break;
            }
          }
          if (u4.noext === true) {
            k2 = false;
            O2 = false;
          }
          let U2 = S2;
          let X16 = "";
          let F2 = "";
          if (v > 0) {
            X16 = S2.slice(0, v);
            S2 = S2.slice(v);
            d -= v;
          }
          if (U2 && O2 === true && d > 0) {
            U2 = S2.slice(0, d);
            F2 = S2.slice(d);
          } else if (O2 === true) {
            U2 = "";
            F2 = S2;
          } else {
            U2 = S2;
          }
          if (U2 && U2 !== "" && U2 !== "/" && U2 !== S2) {
            if (isPathSeparator(U2.charCodeAt(U2.length - 1))) {
              U2 = U2.slice(0, -1);
            }
          }
          if (u4.unescape === true) {
            if (F2) F2 = n.removeBackslashes(F2);
            if (U2 && N2 === true) {
              U2 = n.removeBackslashes(U2);
            }
          }
          const Q2 = { prefix: X16, input: t3, start: v, base: U2, glob: F2, isBrace: L2, isBracket: T, isGlob: O2, isExtglob: k2, isGlobstar: m2, negated: I2, negatedExtglob: B2 };
          if (u4.tokens === true) {
            Q2.maxDepth = 0;
            if (!isPathSeparator(P2)) {
              $2.push(K2);
            }
            Q2.tokens = $2;
          }
          if (u4.parts === true || u4.tokens === true) {
            let e4;
            for (let n2 = 0; n2 < y.length; n2++) {
              const o2 = e4 ? e4 + 1 : v;
              const s2 = y[n2];
              const r2 = t3.slice(o2, s2);
              if (u4.tokens) {
                if (n2 === 0 && v !== 0) {
                  $2[n2].isPrefix = true;
                  $2[n2].value = X16;
                } else {
                  $2[n2].value = r2;
                }
                depth($2[n2]);
                Q2.maxDepth += $2[n2].depth;
              }
              if (n2 !== 0 || r2 !== "") {
                x.push(r2);
              }
              e4 = s2;
            }
            if (e4 && e4 + 1 < t3.length) {
              const n2 = t3.slice(e4 + 1);
              x.push(n2);
              if (u4.tokens) {
                $2[$2.length - 1].value = n2;
                depth($2[$2.length - 1]);
                Q2.maxDepth += $2[$2.length - 1].depth;
              }
            }
            Q2.slashes = y;
            Q2.parts = x;
          }
          return Q2;
        };
        t2.exports = scan;
      }, 96: (t2, e2, u3) => {
        const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u3(154);
        e2.isObject = (t3) => t3 !== null && typeof t3 === "object" && !Array.isArray(t3);
        e2.hasRegexChars = (t3) => s.test(t3);
        e2.isRegexChar = (t3) => t3.length === 1 && e2.hasRegexChars(t3);
        e2.escapeRegex = (t3) => t3.replace(r, "\\$1");
        e2.toPosixSlashes = (t3) => t3.replace(n, "/");
        e2.removeBackslashes = (t3) => t3.replace(o, ((t4) => t4 === "\\" ? "" : t4));
        e2.escapeLast = (t3, u4, n2) => {
          const o2 = t3.lastIndexOf(u4, n2);
          if (o2 === -1) return t3;
          if (t3[o2 - 1] === "\\") return e2.escapeLast(t3, u4, o2 - 1);
          return `${t3.slice(0, o2)}\\${t3.slice(o2)}`;
        };
        e2.removePrefix = (t3, e3 = {}) => {
          let u4 = t3;
          if (u4.startsWith("./")) {
            u4 = u4.slice(2);
            e3.prefix = "./";
          }
          return u4;
        };
        e2.wrapOutput = (t3, e3 = {}, u4 = {}) => {
          const n2 = u4.contains ? "" : "^";
          const o2 = u4.contains ? "" : "$";
          let s2 = `${n2}(?:${t3})${o2}`;
          if (e3.negated === true) {
            s2 = `(?:^(?!${s2}).*$)`;
          }
          return s2;
        };
        e2.basename = (t3, { windows: e3 } = {}) => {
          const u4 = t3.split(e3 ? /[\\/]/ : "/");
          const n2 = u4[u4.length - 1];
          if (n2 === "") {
            return u4[u4.length - 2];
          }
          return n2;
        };
      } };
      var e = {};
      function __nccwpck_require__2(u3) {
        var n = e[u3];
        if (n !== void 0) {
          return n.exports;
        }
        var o = e[u3] = { exports: {} };
        var s = true;
        try {
          t[u3](o, o.exports, __nccwpck_require__2);
          s = false;
        } finally {
          if (s) delete e[u3];
        }
        return o.exports;
      }
      if (typeof __nccwpck_require__2 !== "undefined") __nccwpck_require__2.ab = __dirname + "/";
      var u2 = __nccwpck_require__2(170);
      module.exports = u2;
    })();
  }
});

// ../node_modules/next/dist/shared/lib/match-local-pattern.js
var require_match_local_pattern = __commonJS({
  "../node_modules/next/dist/shared/lib/match-local-pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      hasLocalMatch: function() {
        return hasLocalMatch;
      },
      matchLocalPattern: function() {
        return matchLocalPattern;
      }
    });
    var _picomatch = require_picomatch();
    function matchLocalPattern(pattern, url) {
      if (pattern.search !== void 0) {
        if (pattern.search !== url.search) {
          return false;
        }
      }
      var _pattern_pathname;
      if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
        dot: true
      }).test(url.pathname)) {
        return false;
      }
      return true;
    }
    function hasLocalMatch(localPatterns, urlPathAndQuery) {
      if (!localPatterns) {
        return true;
      }
      const url = new URL(urlPathAndQuery, "http://n");
      return localPatterns.some((p) => matchLocalPattern(p, url));
    }
  }
});

// ../node_modules/next/dist/shared/lib/match-remote-pattern.js
var require_match_remote_pattern = __commonJS({
  "../node_modules/next/dist/shared/lib/match-remote-pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      hasRemoteMatch: function() {
        return hasRemoteMatch;
      },
      matchRemotePattern: function() {
        return matchRemotePattern;
      }
    });
    var _picomatch = require_picomatch();
    function matchRemotePattern(pattern, url) {
      if (pattern.protocol !== void 0) {
        if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) {
          return false;
        }
      }
      if (pattern.port !== void 0) {
        if (pattern.port !== url.port) {
          return false;
        }
      }
      if (pattern.hostname === void 0) {
        throw Object.defineProperty(new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern)), "__NEXT_ERROR_CODE", {
          value: "E410",
          enumerable: false,
          configurable: true
        });
      } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
          return false;
        }
      }
      if (pattern.search !== void 0) {
        if (pattern.search !== url.search) {
          return false;
        }
      }
      var _pattern_pathname;
      if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
        dot: true
      }).test(url.pathname)) {
        return false;
      }
      return true;
    }
    function hasRemoteMatch(domains, remotePatterns, url) {
      return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
    }
  }
});

// ../node_modules/next/dist/shared/lib/image-loader.js
var require_image_loader = __commonJS({
  "../node_modules/next/dist/shared/lib/image-loader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var DEFAULT_Q = 75;
    function defaultLoader(param) {
      let { config, src, width, quality } = param;
      var _config_qualities;
      if (process.env.NODE_ENV !== "production") {
        const missingValues = [];
        if (!src) missingValues.push("src");
        if (!width) missingValues.push("width");
        if (missingValues.length > 0) {
          throw Object.defineProperty(new Error("Next Image Optimization requires " + missingValues.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
            src,
            width,
            quality
          })), "__NEXT_ERROR_CODE", {
            value: "E188",
            enumerable: false,
            configurable: true
          });
        }
        if (src.startsWith("//")) {
          throw Object.defineProperty(new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
            value: "E360",
            enumerable: false,
            configurable: true
          });
        }
        if (src.startsWith("/") && config.localPatterns) {
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasLocalMatch } = require_match_local_pattern();
            if (!hasLocalMatch(config.localPatterns, src)) {
              throw Object.defineProperty(new Error("Invalid src prop (" + src + ") on `next/image` does not match `images.localPatterns` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"), "__NEXT_ERROR_CODE", {
                value: "E426",
                enumerable: false,
                configurable: true
              });
            }
          }
        }
        if (!src.startsWith("/") && (config.domains || config.remotePatterns)) {
          let parsedSrc;
          try {
            parsedSrc = new URL(src);
          } catch (err) {
            console.error(err);
            throw Object.defineProperty(new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
              value: "E63",
              enumerable: false,
              configurable: true
            });
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasRemoteMatch } = require_match_remote_pattern();
            if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
              throw Object.defineProperty(new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host'), "__NEXT_ERROR_CODE", {
                value: "E231",
                enumerable: false,
                configurable: true
              });
            }
          }
        }
        if (quality && config.qualities && !config.qualities.includes(quality)) {
          throw Object.defineProperty(new Error("Invalid quality prop (" + quality + ") on `next/image` does not match `images.qualities` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-qualities"), "__NEXT_ERROR_CODE", {
            value: "E623",
            enumerable: false,
            configurable: true
          });
        }
      }
      const q2 = quality || ((_config_qualities = config.qualities) == null ? void 0 : _config_qualities.reduce((prev, cur) => Math.abs(cur - DEFAULT_Q) < Math.abs(prev - DEFAULT_Q) ? cur : prev)) || DEFAULT_Q;
      return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + q2 + (src.startsWith("/_next/static/media/") && process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    defaultLoader.__next_img_default = true;
    var _default = defaultLoader;
  }
});

// ../node_modules/next/dist/client/use-merged-ref.js
var require_use_merged_ref = __commonJS({
  "../node_modules/next/dist/client/use-merged-ref.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "useMergedRef", {
      enumerable: true,
      get: function() {
        return useMergedRef;
      }
    });
    var _react = __require("react");
    function useMergedRef(refA, refB) {
      const cleanupA = (0, _react.useRef)(null);
      const cleanupB = (0, _react.useRef)(null);
      return (0, _react.useCallback)((current) => {
        if (current === null) {
          const cleanupFnA = cleanupA.current;
          if (cleanupFnA) {
            cleanupA.current = null;
            cleanupFnA();
          }
          const cleanupFnB = cleanupB.current;
          if (cleanupFnB) {
            cleanupB.current = null;
            cleanupFnB();
          }
        } else {
          if (refA) {
            cleanupA.current = applyRef(refA, current);
          }
          if (refB) {
            cleanupB.current = applyRef(refB, current);
          }
        }
      }, [
        refA,
        refB
      ]);
    }
    function applyRef(refA, current) {
      if (typeof refA === "function") {
        const cleanup = refA(current);
        if (typeof cleanup === "function") {
          return cleanup;
        } else {
          return () => refA(null);
        }
      } else {
        refA.current = current;
        return () => {
          refA.current = null;
        };
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/client/image-component.js
var require_image_component = __commonJS({
  "../node_modules/next/dist/client/image-component.js"(exports, module) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Image", {
      enumerable: true,
      get: function() {
        return Image19;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _reactdom = /* @__PURE__ */ _interop_require_default._(__require("react-dom"));
    var _head = /* @__PURE__ */ _interop_require_default._(require_head());
    var _getimgprops = require_get_img_props();
    var _imageconfig = require_image_config();
    var _imageconfigcontextsharedruntime = require_image_config_context_shared_runtime();
    var _warnonce = require_warn_once();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
    var _usemergedref = require_use_merged_ref();
    var configEnv = process.env.__NEXT_IMAGE_OPTS;
    if (typeof window === "undefined") {
      ;
      globalThis.__NEXT_IMAGE_IMPORTED = true;
    }
    function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
      const src = img == null ? void 0 : img.src;
      if (!img || img["data-loaded-src"] === src) {
        return;
      }
      img["data-loaded-src"] = src;
      const p = "decode" in img ? img.decode() : Promise.resolve();
      p.catch(() => {
      }).then(() => {
        if (!img.parentElement || !img.isConnected) {
          return;
        }
        if (placeholder !== "empty") {
          setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
          const event = new Event("load");
          Object.defineProperty(event, "target", {
            writable: false,
            value: img
          });
          let prevented = false;
          let stopped = false;
          onLoadRef.current({
            ...event,
            nativeEvent: event,
            currentTarget: img,
            target: img,
            isDefaultPrevented: () => prevented,
            isPropagationStopped: () => stopped,
            persist: () => {
            },
            preventDefault: () => {
              prevented = true;
              event.preventDefault();
            },
            stopPropagation: () => {
              stopped = true;
              event.stopPropagation();
            }
          });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
          onLoadingCompleteRef.current(img);
        }
        if (process.env.NODE_ENV !== "production") {
          const origSrc = new URL(src, "http://n").searchParams.get("url") || src;
          if (img.getAttribute("data-nimg") === "fill") {
            if (!unoptimized && (!sizesInput || sizesInput === "100vw")) {
              let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
              if (widthViewportRatio < 0.6) {
                if (sizesInput === "100vw") {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                } else {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                }
              }
            }
            if (img.parentElement) {
              const { position } = window.getComputedStyle(img.parentElement);
              const valid = [
                "absolute",
                "fixed",
                "relative"
              ];
              if (!valid.includes(position)) {
                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(",") + ".");
              }
            }
            if (img.height === 0) {
              (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
            }
          }
          const heightModified = img.height.toString() !== img.getAttribute("height");
          const widthModified = img.width.toString() !== img.getAttribute("width");
          if (heightModified && !widthModified || !heightModified && widthModified) {
            (0, _warnonce.warnOnce)('Image with src "' + origSrc + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
          }
        }
      });
    }
    function getDynamicProps(fetchPriority) {
      if (Boolean(_react.use)) {
        return {
          fetchPriority
        };
      }
      return {
        fetchpriority: fetchPriority
      };
    }
    var ImageElement = /* @__PURE__ */ (0, _react.forwardRef)((param, forwardedRef) => {
      let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
      const ownRef = (0, _react.useCallback)((img) => {
        if (!img) {
          return;
        }
        if (onError) {
          img.src = img.src;
        }
        if (process.env.NODE_ENV !== "production") {
          if (!src) {
            console.error('Image is missing required "src" property:', img);
          }
          if (img.getAttribute("alt") === null) {
            console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
          }
        }
        if (img.complete) {
          handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
      }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
      ]);
      const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading,
        width,
        height,
        decoding,
        "data-nimg": fill ? "fill" : "1",
        className,
        style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes,
        srcSet,
        src,
        ref,
        onLoad: (event) => {
          const img = event.currentTarget;
          handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event) => {
          setShowAltText(true);
          if (placeholder !== "empty") {
            setBlurComplete(true);
          }
          if (onError) {
            onError(event);
          }
        }
      });
    });
    function ImagePreload(param) {
      let { isAppRouter, imgAttributes } = param;
      const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
      };
      if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)(_head.default, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("link", {
          rel: "preload",
          // Note how we omit the `href` attribute, as it would only be relevant
          // for browsers that do not support `imagesrcset`, and in those cases
          // it would cause the incorrect image to be preloaded.
          //
          // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
          href: imgAttributes.srcSet ? void 0 : imgAttributes.src,
          ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
      });
    }
    var Image19 = /* @__PURE__ */ (0, _react.forwardRef)((props, forwardedRef) => {
      const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
      const isAppRouter = !pagesRouter;
      const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
      const config = (0, _react.useMemo)(() => {
        var _c_qualities;
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
          ...c.deviceSizes,
          ...c.imageSizes
        ].sort((a, b2) => a - b2);
        const deviceSizes = c.deviceSizes.sort((a, b2) => a - b2);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b2) => a - b2);
        return {
          ...c,
          allSizes,
          deviceSizes,
          qualities
        };
      }, [
        configContext
      ]);
      const { onLoad, onLoadingComplete } = props;
      const onLoadRef = (0, _react.useRef)(onLoad);
      (0, _react.useEffect)(() => {
        onLoadRef.current = onLoad;
      }, [
        onLoad
      ]);
      const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
      (0, _react.useEffect)(() => {
        onLoadingCompleteRef.current = onLoadingComplete;
      }, [
        onLoadingComplete
      ]);
      const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
      const [showAltText, setShowAltText] = (0, _react.useState)(false);
      const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
      });
      return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
          /* @__PURE__ */ (0, _jsxruntime.jsx)(ImageElement, {
            ...imgAttributes,
            unoptimized: imgMeta.unoptimized,
            placeholder: imgMeta.placeholder,
            fill: imgMeta.fill,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            setShowAltText,
            sizesInput: props.sizes,
            ref: forwardedRef
          }),
          imgMeta.priority ? /* @__PURE__ */ (0, _jsxruntime.jsx)(ImagePreload, {
            isAppRouter,
            imgAttributes
          }) : null
        ]
      });
    });
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/image-external.js
var require_image_external = __commonJS({
  "../node_modules/next/dist/shared/lib/image-external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      getImageProps: function() {
        return getImageProps;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _getimgprops = require_get_img_props();
    var _imagecomponent = require_image_component();
    var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
    function getImageProps(imgProps) {
      const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: process.env.__NEXT_IMAGE_OPTS
      });
      for (const [key, value] of Object.entries(props)) {
        if (value === void 0) {
          delete props[key];
        }
      }
      return {
        props
      };
    }
    var _default = _imagecomponent.Image;
  }
});

// ../node_modules/next/image.js
var require_image = __commonJS({
  "../node_modules/next/image.js"(exports, module) {
    "use strict";
    module.exports = require_image_external();
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      assign: function() {
        return assign;
      },
      searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
      }
    });
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      for (const [key, value] of searchParams.entries()) {
        const existing = query[key];
        if (typeof existing === "undefined") {
          query[key] = value;
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          query[key] = [
            existing,
            value
          ];
        }
      }
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string") {
        return param;
      }
      if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            searchParams.append(key, stringifyUrlQueryParam(item));
          }
        } else {
          searchParams.set(key, stringifyUrlQueryParam(value));
        }
      }
      return searchParams;
    }
    function assign(target) {
      for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        searchParamsList[_key - 1] = arguments[_key];
      }
      for (const searchParams of searchParamsList) {
        for (const key of searchParams.keys()) {
          target.delete(key);
        }
        for (const [key, value] of searchParams.entries()) {
          target.append(key, value);
        }
      }
      return target;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      formatUrl: function() {
        return formatUrl;
      },
      formatWithValidation: function() {
        return formatWithValidation;
      },
      urlObjectKeys: function() {
        return urlObjectKeys;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _querystring = /* @__PURE__ */ _interop_require_wildcard._(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && "?" + query || "";
      if (protocol && !protocol.endsWith(":")) protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#") hash = "#" + hash;
      if (search && search[0] !== "?") search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return "" + protocol + host + pathname + search + hash;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function formatWithValidation(url) {
      if (process.env.NODE_ENV === "development") {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (!urlObjectKeys.includes(key)) {
              console.warn("Unknown key passed via urlObject into url.format: " + key);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/omit.js
var require_omit = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/omit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "omit", {
      enumerable: true,
      get: function() {
        return omit;
      }
    });
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
  }
});

// ../node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "../node_modules/next/dist/shared/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      DecodeError: function() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function() {
        return MissingStaticPage;
      },
      NormalizeError: function() {
        return NormalizeError;
      },
      PageNotFoundError: function() {
        return PageNotFoundError;
      },
      SP: function() {
        return SP;
      },
      ST: function() {
        return ST;
      },
      WEB_VITALS: function() {
        return WEB_VITALS;
      },
      execOnce: function() {
        return execOnce;
      },
      getDisplayName: function() {
        return getDisplayName;
      },
      getLocationOrigin: function() {
        return getLocationOrigin;
      },
      getURL: function() {
        return getURL;
      },
      isAbsoluteUrl: function() {
        return isAbsoluteUrl;
      },
      isResSent: function() {
        return isResSent;
      },
      loadGetInitialProps: function() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function() {
        return stringifyError;
      }
    });
    var WEB_VITALS = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function execOnce(fn) {
      let used = false;
      let result;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return protocol + "//" + hostname + (port ? ":" + port : "");
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component2) {
      return typeof Component2 === "string" ? Component2 : Component2.displayName || Component2.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
    }
    async function loadGetInitialProps(App, ctx) {
      if (process.env.NODE_ENV !== "production") {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
          const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        }
      }
      const res = ctx.res || ctx.ctx && ctx.ctx.res;
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: false,
          configurable: true
        });
      }
      if (process.env.NODE_ENV !== "production") {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
      }
      return props;
    }
    var SP = typeof performance !== "undefined";
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    var DecodeError = class extends Error {
    };
    var NormalizeError = class extends Error {
    };
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
      }
    };
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
      }
    };
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
      }
    };
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack
      });
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "removeTrailingSlash", {
      enumerable: true,
      get: function() {
        return removeTrailingSlash;
      }
    });
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "parsePath", {
      enumerable: true,
      get: function() {
        return parsePath;
      }
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// ../node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "../node_modules/next/dist/client/normalize-trailing-slash.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizePathTrailingSlash", {
      enumerable: true,
      get: function() {
        return normalizePathTrailingSlash;
      }
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _parsepath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
        } else if (pathname.endsWith("/")) {
          return "" + pathname + query + hash;
        } else {
          return pathname + "/" + query + hash;
        }
      }
      return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "pathHasPrefix", {
      enumerable: true,
      get: function() {
        return pathHasPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// ../node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "../node_modules/next/dist/client/has-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "hasBasePath", {
      enumerable: true,
      get: function() {
        return hasBasePath;
      }
    });
    var _pathhasprefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/is-local-url.js
var require_is_local_url = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/is-local-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isLocalURL", {
      enumerable: true,
      get: function() {
        return isLocalURL;
      }
    });
    var _utils = require_utils();
    var _hasbasepath = require_has_base_path();
    function isLocalURL(url) {
      if (!(0, _utils.isAbsoluteUrl)(url)) return true;
      try {
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getSortedRouteObjects: function() {
        return getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return getSortedRoutes;
      }
    });
    var UrlNode = class _UrlNode {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: false,
              configurable: true
            });
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: false,
            configurable: true
          });
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
                  value: "E337",
                  enumerable: false,
                  configurable: true
                });
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: false,
                  configurable: true
                });
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: false,
                  configurable: true
                });
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("\u2026")) {
            throw Object.defineProperty(new Error("Detected a three-dot character ('\u2026') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith(".")) {
            throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: false,
              configurable: true
            });
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: false,
                configurable: true
              });
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new _UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
    function getSortedRouteObjects(objects, getter) {
      const indexes = {};
      const pathnames = [];
      for (let i = 0; i < objects.length; i++) {
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
      }
      const sorted = getSortedRoutes(pathnames);
      return sorted.map((pathname) => objects[indexes[pathname]]);
    }
  }
});

// ../node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "../node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ensureLeadingSlash", {
      enumerable: true,
      get: function() {
        return ensureLeadingSlash;
      }
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : "/" + path;
    }
  }
});

// ../node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "../node_modules/next/dist/shared/lib/segment.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      normalizeAppPath: function() {
        return normalizeAppPath;
      },
      normalizeRscURL: function() {
        return normalizeRscURL;
      }
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index2, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index2 === segments.length - 1) {
          return pathname;
        }
        return pathname + "/" + segment;
      }, ""));
    }
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/interception-routes.js
var require_interception_routes = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/interception-routes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
      },
      extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
      },
      isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
      }
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m2) => segment.startsWith(m2))) !== void 0;
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute, marker, interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m2) => segment.startsWith(m2));
        if (marker) {
          ;
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: false,
          configurable: true
        });
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = "/" + interceptedRoute;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: false,
            configurable: true
          });
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return isDynamicRoute;
      }
    });
    var _interceptionroutes = require_interception_routes();
    var TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
    var TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
    function isDynamicRoute(route, strict) {
      if (strict === void 0) strict = true;
      if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
      }
      if (strict) {
        return TEST_STRICT_ROUTE.test(route);
      }
      return TEST_ROUTE.test(route);
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils2 = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
      }
    });
    var _sortedroutes = require_sorted_routes();
    var _isdynamic = require_is_dynamic();
  }
});

// ../node_modules/next/dist/compiled/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "../node_modules/next/dist/compiled/path-to-regexp/index.js"(exports, module) {
    "use strict";
    (() => {
      "use strict";
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var e = {};
      (() => {
        var n = e;
        Object.defineProperty(n, "__esModule", { value: true });
        n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0;
        function lexer(e2) {
          var n2 = [];
          var r = 0;
          while (r < e2.length) {
            var t = e2[r];
            if (t === "*" || t === "+" || t === "?") {
              n2.push({ type: "MODIFIER", index: r, value: e2[r++] });
              continue;
            }
            if (t === "\\") {
              n2.push({ type: "ESCAPED_CHAR", index: r++, value: e2[r++] });
              continue;
            }
            if (t === "{") {
              n2.push({ type: "OPEN", index: r, value: e2[r++] });
              continue;
            }
            if (t === "}") {
              n2.push({ type: "CLOSE", index: r, value: e2[r++] });
              continue;
            }
            if (t === ":") {
              var a = "";
              var i = r + 1;
              while (i < e2.length) {
                var o = e2.charCodeAt(i);
                if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                  a += e2[i++];
                  continue;
                }
                break;
              }
              if (!a) throw new TypeError("Missing parameter name at ".concat(r));
              n2.push({ type: "NAME", index: r, value: a });
              r = i;
              continue;
            }
            if (t === "(") {
              var c = 1;
              var f2 = "";
              var i = r + 1;
              if (e2[i] === "?") {
                throw new TypeError('Pattern cannot start with "?" at '.concat(i));
              }
              while (i < e2.length) {
                if (e2[i] === "\\") {
                  f2 += e2[i++] + e2[i++];
                  continue;
                }
                if (e2[i] === ")") {
                  c--;
                  if (c === 0) {
                    i++;
                    break;
                  }
                } else if (e2[i] === "(") {
                  c++;
                  if (e2[i + 1] !== "?") {
                    throw new TypeError("Capturing groups are not allowed at ".concat(i));
                  }
                }
                f2 += e2[i++];
              }
              if (c) throw new TypeError("Unbalanced pattern at ".concat(r));
              if (!f2) throw new TypeError("Missing pattern at ".concat(r));
              n2.push({ type: "PATTERN", index: r, value: f2 });
              r = i;
              continue;
            }
            n2.push({ type: "CHAR", index: r, value: e2[r++] });
          }
          n2.push({ type: "END", index: r, value: "" });
          return n2;
        }
        function parse2(e2, n2) {
          if (n2 === void 0) {
            n2 = {};
          }
          var r = lexer(e2);
          var t = n2.prefixes, a = t === void 0 ? "./" : t, i = n2.delimiter, o = i === void 0 ? "/#?" : i;
          var c = [];
          var f2 = 0;
          var u2 = 0;
          var p = "";
          var tryConsume = function(e3) {
            if (u2 < r.length && r[u2].type === e3) return r[u2++].value;
          };
          var mustConsume = function(e3) {
            var n3 = tryConsume(e3);
            if (n3 !== void 0) return n3;
            var t2 = r[u2], a2 = t2.type, i2 = t2.index;
            throw new TypeError("Unexpected ".concat(a2, " at ").concat(i2, ", expected ").concat(e3));
          };
          var consumeText = function() {
            var e3 = "";
            var n3;
            while (n3 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
              e3 += n3;
            }
            return e3;
          };
          var isSafe = function(e3) {
            for (var n3 = 0, r2 = o; n3 < r2.length; n3++) {
              var t2 = r2[n3];
              if (e3.indexOf(t2) > -1) return true;
            }
            return false;
          };
          var safePattern = function(e3) {
            var n3 = c[c.length - 1];
            var r2 = e3 || (n3 && typeof n3 === "string" ? n3 : "");
            if (n3 && !r2) {
              throw new TypeError('Must have text between two parameters, missing text after "'.concat(n3.name, '"'));
            }
            if (!r2 || isSafe(r2)) return "[^".concat(escapeString(o), "]+?");
            return "(?:(?!".concat(escapeString(r2), ")[^").concat(escapeString(o), "])+?");
          };
          while (u2 < r.length) {
            var v = tryConsume("CHAR");
            var s = tryConsume("NAME");
            var d = tryConsume("PATTERN");
            if (s || d) {
              var g = v || "";
              if (a.indexOf(g) === -1) {
                p += g;
                g = "";
              }
              if (p) {
                c.push(p);
                p = "";
              }
              c.push({ name: s || f2++, prefix: g, suffix: "", pattern: d || safePattern(g), modifier: tryConsume("MODIFIER") || "" });
              continue;
            }
            var x = v || tryConsume("ESCAPED_CHAR");
            if (x) {
              p += x;
              continue;
            }
            if (p) {
              c.push(p);
              p = "";
            }
            var h = tryConsume("OPEN");
            if (h) {
              var g = consumeText();
              var l2 = tryConsume("NAME") || "";
              var m2 = tryConsume("PATTERN") || "";
              var T = consumeText();
              mustConsume("CLOSE");
              c.push({ name: l2 || (m2 ? f2++ : ""), pattern: l2 && !m2 ? safePattern(g) : m2, prefix: g, suffix: T, modifier: tryConsume("MODIFIER") || "" });
              continue;
            }
            mustConsume("END");
          }
          return c;
        }
        n.parse = parse2;
        function compile(e2, n2) {
          return tokensToFunction(parse2(e2, n2), n2);
        }
        n.compile = compile;
        function tokensToFunction(e2, n2) {
          if (n2 === void 0) {
            n2 = {};
          }
          var r = flags(n2);
          var t = n2.encode, a = t === void 0 ? function(e3) {
            return e3;
          } : t, i = n2.validate, o = i === void 0 ? true : i;
          var c = e2.map((function(e3) {
            if (typeof e3 === "object") {
              return new RegExp("^(?:".concat(e3.pattern, ")$"), r);
            }
          }));
          return function(n3) {
            var r2 = "";
            for (var t2 = 0; t2 < e2.length; t2++) {
              var i2 = e2[t2];
              if (typeof i2 === "string") {
                r2 += i2;
                continue;
              }
              var f2 = n3 ? n3[i2.name] : void 0;
              var u2 = i2.modifier === "?" || i2.modifier === "*";
              var p = i2.modifier === "*" || i2.modifier === "+";
              if (Array.isArray(f2)) {
                if (!p) {
                  throw new TypeError('Expected "'.concat(i2.name, '" to not repeat, but got an array'));
                }
                if (f2.length === 0) {
                  if (u2) continue;
                  throw new TypeError('Expected "'.concat(i2.name, '" to not be empty'));
                }
                for (var v = 0; v < f2.length; v++) {
                  var s = a(f2[v], i2);
                  if (o && !c[t2].test(s)) {
                    throw new TypeError('Expected all "'.concat(i2.name, '" to match "').concat(i2.pattern, '", but got "').concat(s, '"'));
                  }
                  r2 += i2.prefix + s + i2.suffix;
                }
                continue;
              }
              if (typeof f2 === "string" || typeof f2 === "number") {
                var s = a(String(f2), i2);
                if (o && !c[t2].test(s)) {
                  throw new TypeError('Expected "'.concat(i2.name, '" to match "').concat(i2.pattern, '", but got "').concat(s, '"'));
                }
                r2 += i2.prefix + s + i2.suffix;
                continue;
              }
              if (u2) continue;
              var d = p ? "an array" : "a string";
              throw new TypeError('Expected "'.concat(i2.name, '" to be ').concat(d));
            }
            return r2;
          };
        }
        n.tokensToFunction = tokensToFunction;
        function match(e2, n2) {
          var r = [];
          var t = pathToRegexp(e2, r, n2);
          return regexpToFunction(t, r, n2);
        }
        n.match = match;
        function regexpToFunction(e2, n2, r) {
          if (r === void 0) {
            r = {};
          }
          var t = r.decode, a = t === void 0 ? function(e3) {
            return e3;
          } : t;
          return function(r2) {
            var t2 = e2.exec(r2);
            if (!t2) return false;
            var i = t2[0], o = t2.index;
            var c = /* @__PURE__ */ Object.create(null);
            var _loop_1 = function(e3) {
              if (t2[e3] === void 0) return "continue";
              var r3 = n2[e3 - 1];
              if (r3.modifier === "*" || r3.modifier === "+") {
                c[r3.name] = t2[e3].split(r3.prefix + r3.suffix).map((function(e4) {
                  return a(e4, r3);
                }));
              } else {
                c[r3.name] = a(t2[e3], r3);
              }
            };
            for (var f2 = 1; f2 < t2.length; f2++) {
              _loop_1(f2);
            }
            return { path: i, index: o, params: c };
          };
        }
        n.regexpToFunction = regexpToFunction;
        function escapeString(e2) {
          return e2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e2) {
          return e2 && e2.sensitive ? "" : "i";
        }
        function regexpToRegexp(e2, n2) {
          if (!n2) return e2;
          var r = /\((?:\?<(.*?)>)?(?!\?)/g;
          var t = 0;
          var a = r.exec(e2.source);
          while (a) {
            n2.push({ name: a[1] || t++, prefix: "", suffix: "", modifier: "", pattern: "" });
            a = r.exec(e2.source);
          }
          return e2;
        }
        function arrayToRegexp(e2, n2, r) {
          var t = e2.map((function(e3) {
            return pathToRegexp(e3, n2, r).source;
          }));
          return new RegExp("(?:".concat(t.join("|"), ")"), flags(r));
        }
        function stringToRegexp(e2, n2, r) {
          return tokensToRegexp(parse2(e2, r), n2, r);
        }
        function tokensToRegexp(e2, n2, r) {
          if (r === void 0) {
            r = {};
          }
          var t = r.strict, a = t === void 0 ? false : t, i = r.start, o = i === void 0 ? true : i, c = r.end, f2 = c === void 0 ? true : c, u2 = r.encode, p = u2 === void 0 ? function(e3) {
            return e3;
          } : u2, v = r.delimiter, s = v === void 0 ? "/#?" : v, d = r.endsWith, g = d === void 0 ? "" : d;
          var x = "[".concat(escapeString(g), "]|$");
          var h = "[".concat(escapeString(s), "]");
          var l2 = o ? "^" : "";
          for (var m2 = 0, T = e2; m2 < T.length; m2++) {
            var E2 = T[m2];
            if (typeof E2 === "string") {
              l2 += escapeString(p(E2));
            } else {
              var w2 = escapeString(p(E2.prefix));
              var y = escapeString(p(E2.suffix));
              if (E2.pattern) {
                if (n2) n2.push(E2);
                if (w2 || y) {
                  if (E2.modifier === "+" || E2.modifier === "*") {
                    var R2 = E2.modifier === "*" ? "?" : "";
                    l2 += "(?:".concat(w2, "((?:").concat(E2.pattern, ")(?:").concat(y).concat(w2, "(?:").concat(E2.pattern, "))*)").concat(y, ")").concat(R2);
                  } else {
                    l2 += "(?:".concat(w2, "(").concat(E2.pattern, ")").concat(y, ")").concat(E2.modifier);
                  }
                } else {
                  if (E2.modifier === "+" || E2.modifier === "*") {
                    throw new TypeError('Can not repeat "'.concat(E2.name, '" without a prefix and suffix'));
                  }
                  l2 += "(".concat(E2.pattern, ")").concat(E2.modifier);
                }
              } else {
                l2 += "(?:".concat(w2).concat(y, ")").concat(E2.modifier);
              }
            }
          }
          if (f2) {
            if (!a) l2 += "".concat(h, "?");
            l2 += !r.endsWith ? "$" : "(?=".concat(x, ")");
          } else {
            var A2 = e2[e2.length - 1];
            var _ = typeof A2 === "string" ? h.indexOf(A2[A2.length - 1]) > -1 : A2 === void 0;
            if (!a) {
              l2 += "(?:".concat(h, "(?=").concat(x, "))?");
            }
            if (!_) {
              l2 += "(?=".concat(h, "|").concat(x, ")");
            }
          }
          return new RegExp(l2, flags(r));
        }
        n.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e2, n2, r) {
          if (e2 instanceof RegExp) return regexpToRegexp(e2, n2);
          if (Array.isArray(e2)) return arrayToRegexp(e2, n2, r);
          return stringToRegexp(e2, n2, r);
        }
        n.pathToRegexp = pathToRegexp;
      })();
      module.exports = e;
    })();
  }
});

// ../node_modules/next/dist/lib/route-pattern-normalizer.js
var require_route_pattern_normalizer = __commonJS({
  "../node_modules/next/dist/lib/route-pattern-normalizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      hasAdjacentParameterIssues: function() {
        return hasAdjacentParameterIssues;
      },
      normalizeAdjacentParameters: function() {
        return normalizeAdjacentParameters;
      },
      normalizeTokensForRegexp: function() {
        return normalizeTokensForRegexp;
      },
      stripParameterSeparators: function() {
        return stripParameterSeparators;
      }
    });
    var PARAM_SEPARATOR = "_NEXTSEP_";
    function hasAdjacentParameterIssues(route) {
      if (typeof route !== "string") return false;
      if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
      }
      if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
      }
      return false;
    }
    function normalizeAdjacentParameters(route) {
      let normalized = route;
      normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
      normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
      return normalized;
    }
    function normalizeTokensForRegexp(tokens) {
      return tokens.map((token) => {
        if (typeof token === "object" && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        "modifier" in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === "*" || token.modifier === "+") && // Token objects can have different shapes depending on route pattern
        "prefix" in token && "suffix" in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === "" && token.suffix === "") {
          return {
            ...token,
            prefix: "/"
          };
        }
        return token;
      });
    }
    function stripParameterSeparators(params) {
      const cleaned = {};
      for (const [key, value] of Object.entries(params)) {
        if (typeof value === "string") {
          cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), "");
        } else if (Array.isArray(value)) {
          cleaned[key] = value.map((item) => typeof item === "string" ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), "") : item);
        } else {
          cleaned[key] = value;
        }
      }
      return cleaned;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/route-match-utils.js
var require_route_match_utils = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/route-match-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      safeCompile: function() {
        return safeCompile;
      },
      safePathToRegexp: function() {
        return safePathToRegexp;
      },
      safeRegexpToFunction: function() {
        return safeRegexpToFunction;
      },
      safeRouteMatcher: function() {
        return safeRouteMatcher;
      }
    });
    var _pathtoregexp = require_path_to_regexp();
    var _routepatternnormalizer = require_route_pattern_normalizer();
    function safePathToRegexp(route, keys, options) {
      if (typeof route !== "string") {
        return (0, _pathtoregexp.pathToRegexp)(route, keys, options);
      }
      const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
      const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
      try {
        return (0, _pathtoregexp.pathToRegexp)(routeToUse, keys, options);
      } catch (error) {
        if (!needsNormalization) {
          try {
            const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
            return (0, _pathtoregexp.pathToRegexp)(normalizedRoute, keys, options);
          } catch (retryError) {
            throw error;
          }
        }
        throw error;
      }
    }
    function safeCompile(route, options) {
      const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
      const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
      try {
        return (0, _pathtoregexp.compile)(routeToUse, options);
      } catch (error) {
        if (!needsNormalization) {
          try {
            const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
            return (0, _pathtoregexp.compile)(normalizedRoute, options);
          } catch (retryError) {
            throw error;
          }
        }
        throw error;
      }
    }
    function safeRegexpToFunction(regexp, keys) {
      const originalMatcher = (0, _pathtoregexp.regexpToFunction)(regexp, keys || []);
      return (pathname) => {
        const result = originalMatcher(pathname);
        if (!result) return false;
        return {
          ...result,
          params: (0, _routepatternnormalizer.stripParameterSeparators)(result.params)
        };
      };
    }
    function safeRouteMatcher(matcherFn) {
      return (pathname) => {
        const result = matcherFn(pathname);
        if (!result) return false;
        return (0, _routepatternnormalizer.stripParameterSeparators)(result);
      };
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getRouteMatcher", {
      enumerable: true,
      get: function() {
        return getRouteMatcher;
      }
    });
    var _utils = require_utils();
    var _routematchutils = require_route_match_utils();
    function getRouteMatcher(param) {
      let { re, groups } = param;
      const rawMatcher = (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param2) => {
          try {
            return decodeURIComponent(param2);
          } catch (e) {
            throw Object.defineProperty(new _utils.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: false,
              configurable: true
            });
          }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)) {
          const match = routeMatch[group.pos];
          if (match !== void 0) {
            if (group.repeat) {
              params[key] = match.split("/").map((entry) => decode(entry));
            } else {
              params[key] = decode(match);
            }
          }
        }
        return params;
      };
      return (0, _routematchutils.safeRouteMatcher)(rawMatcher);
    }
  }
});

// ../node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "../node_modules/next/dist/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return HTML_CONTENT_TYPE_HEADER;
      },
      INFINITE_CACHE: function() {
        return INFINITE_CACHE;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return JSON_CONTENT_TYPE_HEADER;
      },
      MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      },
      NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
      },
      RSC_SUFFIX: function() {
        return RSC_SUFFIX;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      }
    });
    var TEXT_PLAIN_CONTENT_TYPE_HEADER = "text/plain";
    var HTML_CONTENT_TYPE_HEADER = "text/html; charset=utf-8";
    var JSON_CONTENT_TYPE_HEADER = "application/json; charset=utf-8";
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = "private-next-rsc-track-dynamic-import";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.apiNode,
          WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// ../node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "../node_modules/next/dist/shared/lib/escape-regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "escapeStringRegexp", {
      enumerable: true,
      get: function() {
        return escapeStringRegexp;
      }
    });
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js
var require_get_dynamic_param = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      PARAMETER_PATTERN: function() {
        return PARAMETER_PATTERN;
      },
      getDynamicParam: function() {
        return getDynamicParam;
      },
      parseMatchedParameter: function() {
        return parseMatchedParameter;
      },
      parseParameter: function() {
        return parseParameter;
      }
    });
    function getDynamicParam(params, segmentKey, dynamicParamType, pagePath, fallbackRouteParams) {
      let value = params[segmentKey];
      if (fallbackRouteParams && fallbackRouteParams.has(segmentKey)) {
        value = fallbackRouteParams.get(segmentKey);
      } else if (Array.isArray(value)) {
        value = value.map((i) => encodeURIComponent(i));
      } else if (typeof value === "string") {
        value = encodeURIComponent(value);
      }
      if (!value) {
        const isCatchall = dynamicParamType === "c";
        const isOptionalCatchall = dynamicParamType === "oc";
        if (isCatchall || isOptionalCatchall) {
          if (isOptionalCatchall) {
            return {
              param: segmentKey,
              value: null,
              type: dynamicParamType,
              treeSegment: [
                segmentKey,
                "",
                dynamicParamType
              ]
            };
          }
          value = pagePath.split("/").slice(1).flatMap((pathSegment) => {
            const param = parseParameter(pathSegment);
            var _params_param_key;
            return (_params_param_key = params[param.key]) != null ? _params_param_key : param.key;
          });
          return {
            param: segmentKey,
            value,
            type: dynamicParamType,
            // This value always has to be a string.
            treeSegment: [
              segmentKey,
              value.join("/"),
              dynamicParamType
            ]
          };
        }
      }
      return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        treeSegment: [
          segmentKey,
          Array.isArray(value) ? value.join("/") : value,
          dynamicParamType
        ],
        type: dynamicParamType
      };
    }
    var PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function parseParameter(param) {
      const match = param.match(PARAMETER_PATTERN);
      if (!match) {
        return parseMatchedParameter(param);
      }
      return parseMatchedParameter(match[2]);
    }
    function parseMatchedParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
      },
      getNamedRouteRegex: function() {
        return getNamedRouteRegex;
      },
      getRouteRegex: function() {
        return getRouteRegex;
      }
    });
    var _constants = require_constants();
    var _interceptionroutes = require_interception_routes();
    var _escaperegexp = require_escape_regexp();
    var _removetrailingslash = require_remove_trailing_slash();
    var _getdynamicparam = require_get_dynamic_param();
    function getParametrizedRoute(route, includeSuffix, includePrefix) {
      const groups = {};
      let groupIndex = 1;
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m2) => segment.startsWith(m2));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN);
        if (markerMatch && paramMatches && paramMatches[2]) {
          const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
          const { key, repeat, optional } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          if (includePrefix && paramMatches[1]) {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
          }
          let s = repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        parameterizedRoute: segments.join(""),
        groups
      };
    }
    function getRouteRegex(normalizedRoute, param) {
      let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
      let re = parameterizedRoute;
      if (!excludeOptionalTrailingSlash) {
        re += "(?:/)?";
      }
      return {
        re: new RegExp("^" + re + "$"),
        groups
      };
    }
    function buildGetSafeRouteKey() {
      let i = 0;
      return () => {
        let routeKey = "";
        let j2 = ++i;
        while (j2 > 0) {
          routeKey += String.fromCharCode(97 + (j2 - 1) % 26);
          j2 = Math.floor((j2 - 1) / 26);
        }
        return routeKey;
      };
    }
    function getSafeKeyFromSegment(param) {
      let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
      const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(segment);
      let cleanedKey = key.replace(/\W/g, "");
      if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
      }
      let invalidKey = false;
      if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
      }
      if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
      }
      if (invalidKey) {
        cleanedKey = getSafeRouteKey();
      }
      const duplicateKey = cleanedKey in routeKeys;
      if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
      } else {
        routeKeys[cleanedKey] = key;
      }
      const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
      let pattern;
      if (duplicateKey && backreferenceDuplicateKeys) {
        pattern = "\\k<" + cleanedKey + ">";
      } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
      } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
      }
      return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
    }
    function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m2) => segment.startsWith(m2));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN);
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
          segments.push(getSafeKeyFromSegment({
            getSafeRouteKey,
            interceptionMarker: paramMatches[1],
            segment: paramMatches[2],
            routeKeys,
            keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
            backreferenceDuplicateKeys
          }));
        } else if (paramMatches && paramMatches[2]) {
          if (includePrefix && paramMatches[1]) {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
          }
          let s = getSafeKeyFromSegment({
            getSafeRouteKey,
            segment: paramMatches[2],
            routeKeys,
            keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : void 0,
            backreferenceDuplicateKeys
          });
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        namedParameterizedRoute: segments.join(""),
        routeKeys
      };
    }
    function getNamedRouteRegex(normalizedRoute, options) {
      var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
      const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
      let namedRegex = result.namedParameterizedRoute;
      if (!options.excludeOptionalTrailingSlash) {
        namedRegex += "(?:/)?";
      }
      return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
      };
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: "^/" + catchAllRegex + "$"
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
      };
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/interpolate-as.js
var require_interpolate_as = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/interpolate-as.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "interpolateAs", {
      enumerable: true,
      get: function() {
        return interpolateAs;
      }
    });
    var _routematcher = require_route_matcher();
    var _routeregex = require_route_regex();
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (
        // Try to match the dynamic route against the asPath
        (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query
      );
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
          replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
          value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
  }
});

// ../node_modules/next/dist/client/resolve-href.js
var require_resolve_href = __commonJS({
  "../node_modules/next/dist/client/resolve-href.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "resolveHref", {
      enumerable: true,
      get: function() {
        return resolveHref;
      }
    });
    var _querystring = require_querystring();
    var _formaturl = require_format_url();
    var _omit = require_omit();
    var _utils = require_utils();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var _islocalurl = require_is_local_url();
    var _utils1 = require_utils2();
    var _interpolateas = require_interpolate_as();
    var _routeregex = require_route_regex();
    var _routematcher = require_route_matcher();
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
      const urlProtoMatch = urlAsString.match(/^[a-z][a-z0-9+.-]*:\/\//i);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?", 1);
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        let baseBase = urlAsString.startsWith("#") ? router.asPath : router.pathname;
        if (urlAsString.startsWith("?")) {
          baseBase = router.asPath;
          if ((0, _utils1.isDynamicRoute)(router.pathname)) {
            baseBase = router.pathname;
            const routeRegex = (0, _routeregex.getRouteRegex)(router.pathname);
            const match = (0, _routematcher.getRouteMatcher)(routeRegex)(router.asPath);
            if (!match) {
              baseBase = router.asPath;
            }
          }
        }
        base = new URL(baseBase, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
          const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formaturl.formatWithValidation)({
              pathname: result,
              hash: finalUrl.hash,
              query: (0, _omit.omit)(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addPathPrefix", {
      enumerable: true,
      get: function() {
        return addPathPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + prefix + pathname + query + hash;
    }
  }
});

// ../node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "../node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale) return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
    }
  }
});

// ../node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "../node_modules/next/dist/client/add-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var addLocale = function(path) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "../node_modules/next/dist/client/request-idle-callback.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      cancelIdleCallback: function() {
        return cancelIdleCallback;
      },
      requestIdleCallback: function() {
        return requestIdleCallback;
      }
    });
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return self.setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "../node_modules/next/dist/client/use-intersection.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "useIntersection", {
      enumerable: true,
      get: function() {
        return useIntersection;
      }
    });
    var _react = __require("react");
    var _requestidlecallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index2 = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index2 > -1) {
            idList.splice(index2, 1);
          }
        }
      };
    }
    function useIntersection(param) {
      let { rootRef, rootMargin, disabled } = param;
      const isDisabled = disabled || !hasIntersectionObserver;
      const [visible, setVisible] = (0, _react.useState)(false);
      const elementRef = (0, _react.useRef)(null);
      const setElement = (0, _react.useCallback)((element) => {
        elementRef.current = element;
      }, []);
      (0, _react.useEffect)(() => {
        if (hasIntersectionObserver) {
          if (isDisabled || visible) return;
          const element = elementRef.current;
          if (element && element.tagName) {
            const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef == null ? void 0 : rootRef.current,
              rootMargin
            });
            return unobserve;
          }
        } else {
          if (!visible) {
            const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
            return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
          }
        }
      }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
      ]);
      const resetVisible = (0, _react.useCallback)(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var cache = /* @__PURE__ */ new WeakMap();
    function normalizeLocalePath(pathname, locales) {
      if (!locales) return {
        pathname
      };
      let lowercasedLocales = cache.get(locales);
      if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale) => locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
      }
      let detectedLocale;
      const segments = pathname.split("/", 2);
      if (!segments[1]) return {
        pathname
      };
      const segment = segments[1].toLowerCase();
      const index2 = lowercasedLocales.indexOf(segment);
      if (index2 < 0) return {
        pathname
      };
      detectedLocale = locales[index2];
      pathname = pathname.slice(detectedLocale.length + 1) || "/";
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "../node_modules/next/dist/client/normalize-locale-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems) return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        var _item_domain, _item_locales;
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
          return item;
        }
      }
    }
  }
});

// ../node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "../node_modules/next/dist/client/detect-domain-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    var detectDomainLocale = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "../node_modules/next/dist/client/get-domain-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getDomainLocale", {
      enumerable: true,
      get: function() {
        return getDomainLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = "http" + (domain.http ? "" : "s") + "://";
          const finalLocale = target === domain.defaultLocale ? "" : "/" + target;
          return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "../node_modules/next/dist/client/add-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addBasePath", {
      enumerable: true,
      get: function() {
        return addBasePath;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/dist/shared/lib/utils/error-once.js
var require_error_once = __commonJS({
  "../node_modules/next/dist/shared/lib/utils/error-once.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "errorOnce", {
      enumerable: true,
      get: function() {
        return errorOnce;
      }
    });
    var errorOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const errors = /* @__PURE__ */ new Set();
      errorOnce = (msg) => {
        if (!errors.has(msg)) {
          console.error(msg);
        }
        errors.add(msg);
      };
    }
  }
});

// ../node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "../node_modules/next/dist/client/link.js"(exports, module) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      useLinkStatus: function() {
        return useLinkStatus;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _resolvehref = require_resolve_href();
    var _islocalurl = require_is_local_url();
    var _formaturl = require_format_url();
    var _utils = require_utils();
    var _addlocale = require_add_locale2();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _useintersection = require_use_intersection();
    var _getdomainlocale = require_get_domain_locale();
    var _addbasepath = require_add_base_path();
    var _usemergedref = require_use_merged_ref();
    var _erroronce = require_error_once();
    var prefetched = /* @__PURE__ */ new Set();
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined") {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        return;
      }
      if (!options.bypassPrefetchedCheck) {
        const locale = (
          // Let the link's locale prop override the default router locale.
          typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : void 0
        );
        const prefetchedKey = href + "%" + as + "%" + locale;
        if (prefetched.has(prefetchedKey)) {
          return;
        }
        prefetched.add(prefetchedKey);
      }
      router.prefetch(href, as, options).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          throw err;
        }
      });
    }
    function isModifiedEvent(event) {
      const eventTarget = event.currentTarget;
      const target = eventTarget.getAttribute("target");
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
      event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute("download")) {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
          e.preventDefault();
          location.replace(href);
        }
        return;
      }
      e.preventDefault();
      const navigate = () => {
        if (onNavigate) {
          let isDefaultPrevented = false;
          onNavigate({
            preventDefault: () => {
              isDefaultPrevented = true;
            }
          });
          if (isDefaultPrevented) {
            return;
          }
        }
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll: routerScroll
          });
        } else {
          router[replace ? "replace" : "push"](as || href, {
            scroll: routerScroll
          });
        }
      };
      navigate();
    }
    function formatStringOrUrl(urlObjOrString) {
      if (typeof urlObjOrString === "string") {
        return urlObjOrString;
      }
      return (0, _formaturl.formatUrl)(urlObjOrString);
    }
    var Link9 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      let children;
      const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onNavigate, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
          children
        });
      }
      const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
      const prefetchEnabled = prefetchProp !== false;
      if (process.env.NODE_ENV !== "production") {
        let createPropError = function(args) {
          return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: false,
            configurable: true
          });
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          } else {
            const _ = key;
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true,
          onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart" || key === "onNavigate") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else if (key === "prefetch") {
            if (props[key] != null && valType !== "boolean" && props[key] !== "auto") {
              throw createPropError({
                key,
                expected: '`boolean | "auto"`',
                actual: valType
              });
            }
          } else {
            const _ = key;
          }
        });
      }
      const { href, as } = _react.default.useMemo(() => {
        if (!router) {
          const resolvedHref2 = formatStringOrUrl(hrefProp);
          return {
            href: resolvedHref2,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref2
          };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          if (onClick) {
            console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
          }
          if (onMouseEnterProp) {
            console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                value: "E320",
                enumerable: false,
                configurable: true
              });
            }
            throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: false,
              configurable: true
            });
          }
        } else {
          child = _react.default.Children.only(children);
        }
      } else {
        if (process.env.NODE_ENV === "development") {
          if ((children == null ? void 0 : children.type) === "a") {
            throw Object.defineProperty(new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor"), "__NEXT_ERROR_CODE", {
              value: "E209",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
      });
      const setIntersectionWithResetRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
      }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      const setRef2 = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
      _react.default.useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
          return;
        }
        if (!router) {
          return;
        }
        if (!isVisible || !prefetchEnabled) {
          return;
        }
        prefetch(router, href, as, {
          locale
        });
      }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        router == null ? void 0 : router.locale,
        router
      ]);
      const childProps = {
        ref: setRef2,
        onClick(e) {
          if (process.env.NODE_ENV !== "production") {
            if (!e) {
              throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                value: "E312",
                enumerable: false,
                configurable: true
              });
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!router) {
            return;
          }
          if (e.defaultPrevented) {
            return;
          }
          linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate);
        },
        onMouseEnter(e) {
          if (!legacyBehavior && typeof onMouseEnterProp === "function") {
            onMouseEnterProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function onTouchStart(e) {
          if (!legacyBehavior && typeof onTouchStartProp === "function") {
            onTouchStartProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        }
      };
      if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
      } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router == null ? void 0 : router.locale;
        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
      }
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          (0, _erroronce.errorOnce)("`legacyBehavior` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:\n\nnpx @next/codemod@latest new-link .\n\nLearn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components");
        }
        return /* @__PURE__ */ _react.default.cloneElement(child, childProps);
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children
      });
    });
    var LinkStatusContext = /* @__PURE__ */ (0, _react.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: false
    });
    var useLinkStatus = () => {
      return (0, _react.useContext)(LinkStatusContext);
    };
    var _default = Link9;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../node_modules/next/link.js
var require_link2 = __commonJS({
  "../node_modules/next/link.js"(exports, module) {
    "use strict";
    module.exports = require_link();
  }
});

// ../components/zenziui/ai-input/ai-input-01.tsx
import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";

// ../lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../components/ui/textarea.tsx
import { jsx } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// ../hooks/use-auto-resize-textarea.ts
import { useEffect, useRef, useCallback } from "react";
function useAutoResizeTextarea({
  minHeight,
  maxHeight
}) {
  const textareaRef = useRef(null);
  const adjustHeight = useCallback(
    (reset) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(
          textarea.scrollHeight,
          maxHeight != null ? maxHeight : Number.POSITIVE_INFINITY
        )
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);
  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);
  return { textareaRef, adjustHeight };
}

// ../components/zenziui/ai-input/ai-input-01.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-02.tsx
import { CornerRightUp as CornerRightUp2, FileUp, Paperclip, X } from "lucide-react";
import { useState as useState3 } from "react";

// ../hooks/use-file-input.ts
import { useState as useState2, useRef as useRef2 } from "react";

// ../components/zenziui/ai-input/ai-input-02.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-03.tsx
import {
  Text,
  CheckCheck,
  ArrowDownWideNarrow,
  CornerRightDown
} from "lucide-react";
import { useState as useState4 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-04.tsx
import { Globe, Paperclip as Paperclip2, Send } from "lucide-react";
import { useState as useState5 } from "react";

// ../node_modules/motion/dist/es/react.mjs
var react_exports = {};
__reExport(react_exports, framer_motion_star);
import * as framer_motion_star from "framer-motion";

// ../components/zenziui/ai-input/ai-input-04.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-05.tsx
import { CornerRightUp as CornerRightUp3 } from "lucide-react";
import { useState as useState6, useEffect as useEffect2, useCallback as useCallback2 } from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-06.tsx
import { CornerRightUp as CornerRightUp4 } from "lucide-react";
import { useState as useState7 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-07.tsx
import { CornerRightUp as CornerRightUp5 } from "lucide-react";
import { useState as useState8, useEffect as useEffect3 } from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-08.tsx
import { Mic as Mic2 } from "lucide-react";
import { useState as useState9, useEffect as useEffect4 } from "react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-09.tsx
import { Plus, Mic as Mic3, File, Camera, X as X2, ArrowRight } from "lucide-react";
import { useState as useState10, useRef as useRef3 } from "react";

// ../hooks/use-click-outside.ts
import { useEffect as useEffect5 } from "react";

// ../components/zenziui/ai-input/ai-input-09.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-10.tsx
import {
  Plus as Plus2,
  File as File2,
  Camera as Camera2,
  X as X3,
  ArrowRight as ArrowRight2,
  Brain,
  ChevronDown,
  Lock,
  Unlock
} from "lucide-react";
import { useState as useState11, useRef as useRef4, useCallback as useCallback3 } from "react";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var AI_MODELS = [
  { name: "GPT-4", description: "The popular kid" },
  { name: "GPT-3.5", description: "Time flies, he is old now..." },
  { name: "Claude", description: "Yes, the best for coding" }
].map((model) => ({ ...model, icon: /* @__PURE__ */ jsx11(Brain, { className: "w-4 h-4" }) }));

// ../components/zenziui/ai-input/ai-input-11.tsx
import { ArrowRight as ArrowRight3, Bot } from "lucide-react";
import { useState as useState12, useRef as useRef5 } from "react";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var AI_AGENTS = [
  { name: "Copywriter Agent", description: "Write anything you want" },
  { name: "Nextjs Agent", description: "Write code for anything you want" }
].map((model) => ({ ...model }));

// ../components/zenziui/ai-input/ai-input-12.tsx
import { ArrowRight as ArrowRight4 } from "lucide-react";
import { useState as useState20 } from "react";

// ../node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// ../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// ../node_modules/@radix-ui/react-context/dist/index.mjs
import * as React2 from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React2.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a3;
      const { scope, children, ...context } = props;
      const Context = ((_a3 = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a3[index2]) || BaseContext;
      const value = React2.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx13(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      var _a3;
      const Context = ((_a3 = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a3[index2]) || BaseContext;
      const context = React2.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React2.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React2.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React2.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// ../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import * as React7 from "react";

// ../node_modules/@radix-ui/react-primitive/dist/index.mjs
import * as React4 from "react";
import * as ReactDOM from "react-dom";

// ../node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React3 from "react";
import { Fragment as Fragment2, jsx as jsx14 } from "react/jsx-runtime";
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot22 = React3.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React3.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React3.Children.count(newElement) > 1) return React3.Children.only(null);
          return React3.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx14(SlotClone, { ...slotProps, ref: forwardedRef, children: React3.isValidElement(newElement) ? React3.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx14(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot22.displayName = `${ownerName}.Slot`;
  return Slot22;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React3.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React3.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React3.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React3.cloneElement(children, props2);
    }
    return React3.Children.count(children) > 1 ? React3.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return React3.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a3, _b2;
  let getter = (_a3 = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a3.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b2 = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b2.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// ../node_modules/@radix-ui/react-primitive/dist/index.mjs
import { jsx as jsx15 } from "react/jsx-runtime";
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot3 = createSlot(`Primitive.${node}`);
  const Node2 = React4.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx15(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// ../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
import * as React5 from "react";
function useCallbackRef(callback) {
  const callbackRef = React5.useRef(callback);
  React5.useEffect(() => {
    callbackRef.current = callback;
  });
  return React5.useMemo(() => (...args) => {
    var _a3;
    return (_a3 = callbackRef.current) == null ? void 0 : _a3.call(callbackRef, ...args);
  }, []);
}

// ../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
import * as React6 from "react";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React6.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// ../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import { jsx as jsx16 } from "react/jsx-runtime";
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React7.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React7.forwardRef(
  (props, forwardedRef) => {
    var _a3;
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React7.useContext(DismissableLayerContext);
    const [node, setNode] = React7.useState(null);
    const ownerDocument = (_a3 = node == null ? void 0 : node.ownerDocument) != null ? _a3 : globalThis == null ? void 0 : globalThis.document;
    const [, force] = React7.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React7.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React7.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React7.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsx16(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React7.forwardRef((props, forwardedRef) => {
  const context = React7.useContext(DismissableLayerContext);
  const ref = React7.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React7.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsx16(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React7.useRef(false);
  const handleClickRef = React7.useRef(() => {
  });
  React7.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React7.useRef(false);
  React7.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// ../node_modules/@radix-ui/react-id/dist/index.mjs
import * as React9 from "react";

// ../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React8 from "react";
var useLayoutEffect2 = (globalThis == null ? void 0 : globalThis.document) ? React8.useLayoutEffect : () => {
};

// ../node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React9[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React9.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId != null ? reactId : String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// ../node_modules/@radix-ui/react-popper/dist/index.mjs
import * as React13 from "react";

// ../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// ../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b2) => a.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b2) => a[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// ../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// ../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b2) {
  return a.x === b2.x && a.y === b2.y && a.width === b2.width && a.height === b2.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// ../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React10 from "react";
import { useLayoutEffect as useLayoutEffect3 } from "react";
import * as ReactDOM2 from "react-dom";
var isClient = typeof document !== "undefined";
var noop = function noop2() {
};
var index = isClient ? useLayoutEffect3 : noop;
function deepEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  if (typeof a !== typeof b2) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b2.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b2 && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b2.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b2[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b2, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b2 !== b2;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React10.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React10.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React10.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React10.useState(null);
  const [_floating, _setFloating] = React10.useState(null);
  const setReference = React10.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React10.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React10.useRef(null);
  const floatingRef = React10.useRef(null);
  const dataRef = React10.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React10.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React10.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React10.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React10.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React10.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React10.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// ../node_modules/@radix-ui/react-arrow/dist/index.mjs
import * as React11 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var NAME = "Arrow";
var Arrow = React11.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ jsx17(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : /* @__PURE__ */ jsx17("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root = Arrow;

// ../node_modules/@radix-ui/react-use-size/dist/index.mjs
import * as React12 from "react";
function useSize(element) {
  const [size4, setSize] = React12.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}

// ../node_modules/@radix-ui/react-popper/dist/index.mjs
import { jsx as jsx18 } from "react/jsx-runtime";
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React13.useState(null);
  return /* @__PURE__ */ jsx18(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React13.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React13.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const anchorRef = React13.useRef(null);
    React13.useEffect(() => {
      const previousAnchor = anchorRef.current;
      anchorRef.current = (virtualRef == null ? void 0 : virtualRef.current) || ref.current;
      if (previousAnchor !== anchorRef.current) {
        context.onAnchorChange(anchorRef.current);
      }
    });
    return virtualRef ? null : /* @__PURE__ */ jsx18(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = React13.forwardRef(
  (props, forwardedRef) => {
    var _a3, _b2, _c, _d, _e, _f, _g, _h;
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = React13.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow4, setArrow] = React13.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = (_a3 = arrowSize == null ? void 0 : arrowSize.width) != null ? _a3 : 0;
    const arrowHeight = (_b2 = arrowSize == null ? void 0 : arrowSize.height) != null ? _b2 : 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced == null ? void 0 : handlePlaced();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = (_c = middlewareData.arrow) == null ? void 0 : _c.x;
    const arrowY = (_d = middlewareData.arrow) == null ? void 0 : _d.y;
    const cannotCenterArrow = ((_e = middlewareData.arrow) == null ? void 0 : _e.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React13.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ jsx18(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            (_f = middlewareData.transformOrigin) == null ? void 0 : _f.x,
            (_g = middlewareData.transformOrigin) == null ? void 0 : _g.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_h = middlewareData.hide) == null ? void 0 : _h.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ jsx18(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ jsx18(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React13.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ jsx18(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ jsx18(
          Root,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _a3, _b2, _c, _d, _e;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_a3 = middlewareData.arrow) == null ? void 0 : _a3.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = ((_c = (_b2 = middlewareData.arrow) == null ? void 0 : _b2.x) != null ? _c : 0) + arrowWidth / 2;
    const arrowYCenter = ((_e = (_d = middlewareData.arrow) == null ? void 0 : _d.y) != null ? _e : 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow2 = PopperArrow;

// ../node_modules/@radix-ui/react-portal/dist/index.mjs
import * as React14 from "react";
import ReactDOM3 from "react-dom";
import { jsx as jsx19 } from "react/jsx-runtime";
var PORTAL_NAME = "Portal";
var Portal = React14.forwardRef((props, forwardedRef) => {
  var _a3;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React14.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body);
  return container ? ReactDOM3.createPortal(/* @__PURE__ */ jsx19(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// ../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React15 from "react";
import * as React22 from "react";
var useInsertionEffect = React15[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React15.useRef(prop !== void 0);
    React15.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React15.useCallback(
    (nextValue) => {
      var _a3;
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          (_a3 = onChangeRef.current) == null ? void 0 : _a3.call(onChangeRef, value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React15.useState(defaultProp);
  const prevValueRef = React15.useRef(value);
  const onChangeRef = React15.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React15.useEffect(() => {
    var _a3;
    if (prevValueRef.current !== value) {
      (_a3 = onChangeRef.current) == null ? void 0 : _a3.call(onChangeRef, value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// ../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
import * as React16 from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME2 = "VisuallyHidden";
var VisuallyHidden = React16.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsx20(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
      }
    );
  }
);
VisuallyHidden.displayName = NAME2;

// ../components/ui/tooltip.tsx
import { jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-12.tsx
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-13.tsx
import { ArrowRight as ArrowRight5 } from "lucide-react";
import { useState as useState21 } from "react";
import { jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-14.tsx
import { ArrowRight as ArrowRight6, Brain as Brain2 } from "lucide-react";
import { useState as useState22 } from "react";
import { jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-15.tsx
import {
  ArrowRight as ArrowRight7,
  Brain as Brain3,
  Mic as Mic4,
  Paperclip as Paperclip3,
  TriangleAlert
} from "lucide-react";
import { useState as useState23 } from "react";
import { jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-16.tsx
import { useState as useState24, useRef as useRef13, useCallback as useCallback7 } from "react";
import { MessageSquare, Wand2, Search, SendHorizontal } from "lucide-react";
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";

// ../components/zenziui/ai-input/ai-input-17.tsx
import { useState as useState25 } from "react";
import { ArrowUpCircle, Paperclip as Paperclip4, Globe as Globe2, Figma } from "lucide-react";
import { jsx as jsx27, jsxs as jsxs18 } from "react/jsx-runtime";

// ../components/zenziui/alert/alert-01.tsx
import { CheckCircle2 } from "lucide-react";
import { jsx as jsx28, jsxs as jsxs19 } from "react/jsx-runtime";

// ../components/zenziui/alert/alert-02.tsx
var import_image = __toESM(require_image());
import { Check, X as X4 } from "lucide-react";
import { jsx as jsx29, jsxs as jsxs20 } from "react/jsx-runtime";

// ../components/zenziui/alert/alert-03.tsx
import { CheckCircle2 as CheckCircle22 } from "lucide-react";
import { jsx as jsx30, jsxs as jsxs21 } from "react/jsx-runtime";

// ../components/zenziui/alert/alert-04.tsx
import { PartyPopper } from "lucide-react";
import { jsx as jsx31, jsxs as jsxs22 } from "react/jsx-runtime";

// ../components/zenziui/alert/alert-05.tsx
import { CircleDollarSign } from "lucide-react";
import { jsx as jsx32, jsxs as jsxs23 } from "react/jsx-runtime";

// ../components/zenziui/alert/alert-06.tsx
import { Sparkles } from "lucide-react";
import { jsx as jsx33, jsxs as jsxs24 } from "react/jsx-runtime";

// ../node_modules/class-variance-authority/dist/index.mjs
import { clsx as clsx2 } from "clsx";
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx2;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// ../components/ui/button.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size: size4,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx34(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size: size4, className })),
      ...props
    }
  );
}

// ../components/zenziui/alert/alert-07.tsx
import { jsx as jsx35, jsxs as jsxs25 } from "react/jsx-runtime";

// ../components/zenziui/blocks/ai-card-generation/ai-card-generation.tsx
import { useState as useState32 } from "react";

// ../components/zenziui/blocks/ai-card-generation/preview-generation.tsx
var import_image2 = __toESM(require_image());
import { useState as useState26, useEffect as useEffect12 } from "react";
import { Loader2 } from "lucide-react";

// ../components/ui/card.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx36(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx36(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}

// ../components/zenziui/blocks/ai-card-generation/preview-generation.tsx
import { jsx as jsx37, jsxs as jsxs26 } from "react/jsx-runtime";
var Preview = ({ isLoading, imageUrl }) => {
  const availableTexts = [
    "Creating your masterpiece...",
    "Finding the good colors...",
    "Adding the final touches..."
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState26(0);
  const [progress, setProgress] = useState26(0);
  useEffect12(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isLoading]);
  useEffect12(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % availableTexts.length);
    }, 1e3);
    return () => clearInterval(interval);
  }, [isLoading]);
  return /* @__PURE__ */ jsx37("div", { className: "aspect-video  rounded-xl mb-4 flex items-center justify-center", children: isLoading ? /* @__PURE__ */ jsx37(Card, { className: "w-full max-w-md border-0 shadow-none bg-transparent", children: /* @__PURE__ */ jsxs26(CardContent, { className: "flex flex-col items-center gap-4 p-6", children: [
    /* @__PURE__ */ jsxs26("div", { className: "relative w-12 h-12", children: [
      /* @__PURE__ */ jsx37(Loader2, { className: "w-full h-full animate-spin text-fuchsia-500" }),
      /* @__PURE__ */ jsx37("div", { className: "absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-fuchsia-500/10 rounded-full animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsxs26("div", { className: "space-y-1 text-center", children: [
      /* @__PURE__ */ jsx37("p", { className: "text-sm font-medium text-zinc-700 dark:text-zinc-300", children: availableTexts[currentTextIndex] }),
      /* @__PURE__ */ jsx37("p", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: "This usually takes 10-15 seconds" })
    ] }),
    /* @__PURE__ */ jsx37("div", { className: "w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx37(
      "div",
      {
        className: "h-full bg-fuchsia-500 transition-all duration-300 ease-linear",
        style: { width: `${progress}%` }
      }
    ) })
  ] }) }) : /* @__PURE__ */ jsx37("div", { className: "flex flex-col items-center gap-2", children: /* @__PURE__ */ jsx37(
    import_image2.default,
    {
      src: imageUrl,
      width: 400,
      height: 400,
      alt: "Portrait",
      className: "rounded-xl"
    }
  ) }) });
};

// ../components/zenziui/blocks/ai-card-generation/error-generation.tsx
import { AlertCircle } from "lucide-react";
import { jsx as jsx38, jsxs as jsxs27 } from "react/jsx-runtime";
var ErrorGeneration = ({ error }) => {
  return /* @__PURE__ */ jsxs27("div", { className: "m-4 px-4 py-3 flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 rounded-xl", children: [
    /* @__PURE__ */ jsx38(AlertCircle, { className: "w-4 h-4 shrink-0" }),
    /* @__PURE__ */ jsx38("p", { children: error })
  ] });
};

// ../components/zenziui/blocks/ai-card-generation/form-generation.tsx
import { MessageCircle, Sparkles as Sparkles2 } from "lucide-react";

// ../node_modules/@radix-ui/react-select/dist/index.mjs
import * as React32 from "react";
import * as ReactDOM4 from "react-dom";

// ../node_modules/@radix-ui/number/dist/index.mjs
function clamp2(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}

// ../node_modules/@radix-ui/react-collection/dist/index.mjs
import React18 from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
import React23 from "react";
import { jsx as jsx210 } from "react/jsx-runtime";
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React18.useRef(null);
    const itemMap = React18.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsx39(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React18.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsx39(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React18.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React18.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React18.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsx39(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React18.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b2) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b2.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}

// ../node_modules/@radix-ui/react-direction/dist/index.mjs
import * as React19 from "react";
import { jsx as jsx40 } from "react/jsx-runtime";
var DirectionContext = React19.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React19.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// ../node_modules/@radix-ui/react-focus-guards/dist/index.mjs
import * as React20 from "react";
var count2 = 0;
function useFocusGuards() {
  React20.useEffect(() => {
    var _a3, _b2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_a3 = edgeGuards[0]) != null ? _a3 : createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_b2 = edgeGuards[1]) != null ? _b2 : createFocusGuard());
    count2++;
    return () => {
      if (count2 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count2--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// ../node_modules/@radix-ui/react-focus-scope/dist/index.mjs
import * as React21 from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React21.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React21.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React21.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React21.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React21.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React21.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement != null ? previouslyFocusedElement : document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React21.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsx41(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _a3;
      stack = arrayRemove(stack, focusScope);
      (_a3 = stack[0]) == null ? void 0 : _a3.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// ../node_modules/@radix-ui/react-use-previous/dist/index.mjs
import * as React24 from "react";
function usePrevious(value) {
  const ref = React24.useRef({ value, previous: value });
  return React24.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

// ../node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// ../node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l2 = from.length, ar; i < l2; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// ../node_modules/react-remove-scroll/dist/es2015/Combination.js
import * as React31 from "react";

// ../node_modules/react-remove-scroll/dist/es2015/UI.js
import * as React27 from "react";

// ../node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState as useState28 } from "react";
function useCallbackRef2(initialValue, callback) {
  var ref = useState28(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../node_modules/use-callback-ref/dist/es2015/useMergeRef.js
import * as React25 from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React25.useLayoutEffect : React25.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// ../node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// ../node_modules/use-sidecar/dist/es2015/exports.js
import * as React26 from "react";
var SideCar = function(_a3) {
  var sideCar = _a3.sideCar, rest = __rest(_a3, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target2 = sideCar.read();
  if (!Target2) {
    throw new Error("Sidecar medium not found");
  }
  return React26.createElement(Target2, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React27.forwardRef(function(props, parentRef) {
  var ref = React27.useRef(null);
  var _a3 = React27.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a3[0], setCallbacks = _a3[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b2 = props.as, Container = _b2 === void 0 ? "div" : _b2, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React27.createElement(
    React27.Fragment,
    null,
    enabled && React27.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React27.cloneElement(React27.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React27.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import * as React30 from "react";

// ../node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React29 from "react";

// ../node_modules/react-style-singleton/dist/es2015/hook.js
import * as React28 from "react";

// ../node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// ../node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React28.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a3) {
    var styles = _a3.styles, dynamic = _a3.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a3, allowRelative, gapMode, important) {
  var left = _a3.left, top = _a3.top, right = _a3.right, gap = _a3.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React29.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a3) {
  var noRelative = _a3.noRelative, noImportant = _a3.noImportant, _b2 = _a3.gapMode, gapMode = _b2 === void 0 ? "margin" : _b2;
  useLockAttribute();
  var gap = React29.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React29.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a3 = getScrollVariables(axis, current), scrollHeight = _a3[1], clientHeight = _a3[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a3) {
  var scrollTop = _a3.scrollTop, scrollHeight = _a3.scrollHeight, clientHeight = _a3.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a3) {
  var scrollLeft = _a3.scrollLeft, scrollWidth = _a3.scrollWidth, clientWidth = _a3.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a3 = getScrollVariables(axis, target), position = _a3[0], scroll_1 = _a3[1], capacity = _a3[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React30.useRef([]);
  var touchStartRef = React30.useRef([0, 0]);
  var activeAxis = React30.useRef();
  var id = React30.useState(idCounter++)[0];
  var Style2 = React30.useState(styleSingleton)[0];
  var lastProps = React30.useRef(props);
  React30.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React30.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React30.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React30.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React30.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React30.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React30.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React30.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React30.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React30.createElement(
    React30.Fragment,
    null,
    inert ? React30.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React30.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// ../node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React31.forwardRef(function(props, ref) {
  return React31.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../node_modules/@radix-ui/react-select/dist/index.mjs
import { Fragment as Fragment5, jsx as jsx42, jsxs as jsxs28 } from "react/jsx-runtime";
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [
  createCollectionScope,
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props) => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = React32.useState(null);
  const [valueNode, setValueNode] = React32.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React32.useState(false);
  const direction = useDirection(dir);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen != null ? defaultOpen : false,
    onChange: onOpenChange,
    caller: SELECT_NAME
  });
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
    caller: SELECT_NAME
  });
  const triggerPointerDownPosRef = React32.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = React32.useState(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  return /* @__PURE__ */ jsx42(Root2, { ...popperScope, children: /* @__PURE__ */ jsxs28(
    SelectProvider,
    {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: useId(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [
        /* @__PURE__ */ jsx42(Collection.Provider, { scope: __scopeSelect, children: /* @__PURE__ */ jsx42(
          SelectNativeOptionsProvider,
          {
            scope: props.__scopeSelect,
            onNativeOptionAdd: React32.useCallback((option) => {
              setNativeOptionsSet((prev) => new Set(prev).add(option));
            }, []),
            onNativeOptionRemove: React32.useCallback((option) => {
              setNativeOptionsSet((prev) => {
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
              });
            }, []),
            children
          }
        ) }),
        isFormControl ? /* @__PURE__ */ jsxs28(
          SelectBubbleInput,
          {
            "aria-hidden": true,
            required,
            tabIndex: -1,
            name,
            autoComplete,
            value,
            onChange: (event) => setValue(event.target.value),
            disabled,
            form,
            children: [
              value === void 0 ? /* @__PURE__ */ jsx42("option", { value: "" }) : null,
              Array.from(nativeOptionsSet)
            ]
          },
          nativeSelectKey
        ) : null
      ]
    }
  ) });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = React32.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.value === context.value);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem !== void 0) {
        context.onValueChange(nextItem.value);
      }
    });
    const handleOpen = (pointerEvent) => {
      if (!isDisabled) {
        context.onOpenChange(true);
        resetTypeahead();
      }
      if (pointerEvent) {
        context.triggerPointerDownPosRef.current = {
          x: Math.round(pointerEvent.pageX),
          y: Math.round(pointerEvent.pageY)
        };
      }
    };
    return /* @__PURE__ */ jsx42(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsx42(
      Primitive.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        onClick: composeEventHandlers(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
          if (pointerTypeRef.current !== "mouse") {
            handleOpen(event);
          }
        }),
        onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
          }
          if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
            handleOpen(event);
            event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ") return;
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
    useLayoutEffect2(() => {
      onValueNodeHasChildrenChange(hasChildren);
    }, [onValueNodeHasChildrenChange, hasChildren]);
    return /* @__PURE__ */ jsx42(
      Primitive.span,
      {
        ...valueProps,
        ref: composedRefs,
        style: { pointerEvents: "none" },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ jsx42(Fragment5, { children: placeholder }) : children
      }
    );
  }
);
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ jsx42(Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "\u25BC" });
  }
);
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME2 = "SelectPortal";
var SelectPortal = (props) => {
  return /* @__PURE__ */ jsx42(Portal, { asChild: true, ...props });
};
SelectPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "SelectContent";
var SelectContent = React32.forwardRef(
  (props, forwardedRef) => {
    const context = useSelectContext(CONTENT_NAME2, props.__scopeSelect);
    const [fragment, setFragment] = React32.useState();
    useLayoutEffect2(() => {
      setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
      const frag = fragment;
      return frag ? ReactDOM4.createPortal(
        /* @__PURE__ */ jsx42(SelectContentProvider, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsx42(Collection.Slot, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsx42("div", { children: props.children }) }) }),
        frag
      ) : null;
    }
    return /* @__PURE__ */ jsx42(SelectContentImpl, { ...props, ref: forwardedRef });
  }
);
SelectContent.displayName = CONTENT_NAME2;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME2);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot2 = createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = React32.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      position = "item-aligned",
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      //
      // PopperContent props
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions,
      //
      ...contentProps
    } = props;
    const context = useSelectContext(CONTENT_NAME2, __scopeSelect);
    const [content, setContent] = React32.useState(null);
    const [viewport, setViewport] = React32.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [selectedItem, setSelectedItem] = React32.useState(null);
    const [selectedItemText, setSelectedItemText] = React32.useState(
      null
    );
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = React32.useState(false);
    const firstValidItemFoundRef = React32.useRef(false);
    React32.useEffect(() => {
      if (content) return hideOthers(content);
    }, [content]);
    useFocusGuards();
    const focusFirst2 = React32.useCallback(
      (candidates) => {
        const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
          candidate == null ? void 0 : candidate.scrollIntoView({ block: "nearest" });
          if (candidate === firstItem && viewport) viewport.scrollTop = 0;
          if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
          candidate == null ? void 0 : candidate.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
      },
      [getItems, viewport]
    );
    const focusSelectedItem = React32.useCallback(
      () => focusFirst2([selectedItem, content]),
      [focusFirst2, selectedItem, content]
    );
    React32.useEffect(() => {
      if (isPositioned) {
        focusSelectedItem();
      }
    }, [isPositioned, focusSelectedItem]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    React32.useEffect(() => {
      if (content) {
        let pointerMoveDelta = { x: 0, y: 0 };
        const handlePointerMove = (event) => {
          var _a3, _b2, _c, _d;
          pointerMoveDelta = {
            x: Math.abs(Math.round(event.pageX) - ((_b2 = (_a3 = triggerPointerDownPosRef.current) == null ? void 0 : _a3.x) != null ? _b2 : 0)),
            y: Math.abs(Math.round(event.pageY) - ((_d = (_c = triggerPointerDownPosRef.current) == null ? void 0 : _c.y) != null ? _d : 0))
          };
        };
        const handlePointerUp = (event) => {
          if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
            event.preventDefault();
          } else {
            if (!content.contains(event.target)) {
              onOpenChange(false);
            }
          }
          document.removeEventListener("pointermove", handlePointerMove);
          triggerPointerDownPosRef.current = null;
        };
        if (triggerPointerDownPosRef.current !== null) {
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
        }
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp, { capture: true });
        };
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]);
    React32.useEffect(() => {
      const close = () => onOpenChange(false);
      window.addEventListener("blur", close);
      window.addEventListener("resize", close);
      return () => {
        window.removeEventListener("blur", close);
        window.removeEventListener("resize", close);
      };
    }, [onOpenChange]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem) {
        setTimeout(() => nextItem.ref.current.focus());
      }
    });
    const itemRefCallback = React32.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
      },
      [context.value]
    );
    const handleItemLeave = React32.useCallback(() => content == null ? void 0 : content.focus(), [content]);
    const itemTextRefCallback = React32.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItemText(node);
        }
      },
      [context.value]
    );
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions
    } : {};
    return /* @__PURE__ */ jsx42(
      SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ jsx42(Combination_default, { as: Slot2, allowPinchZoom: true, children: /* @__PURE__ */ jsx42(
          FocusScope,
          {
            asChild: true,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault();
            },
            onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
              var _a3;
              (_a3 = context.trigger) == null ? void 0 : _a3.focus({ preventScroll: true });
              event.preventDefault();
            }),
            children: /* @__PURE__ */ jsx42(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: () => context.onOpenChange(false),
                children: /* @__PURE__ */ jsx42(
                  SelectPosition,
                  {
                    role: "listbox",
                    id: context.contentId,
                    "data-state": context.open ? "open" : "closed",
                    dir: context.dir,
                    onContextMenu: (event) => event.preventDefault(),
                    ...contentProps,
                    ...popperContentProps,
                    onPlaced: () => setIsPositioned(true),
                    ref: composedRefs,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...contentProps.style
                    },
                    onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                      if (event.key === "Tab") event.preventDefault();
                      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                        const items = getItems().filter((item) => !item.disabled);
                        let candidateNodes = items.map((item) => item.ref.current);
                        if (["ArrowUp", "End"].includes(event.key)) {
                          candidateNodes = candidateNodes.slice().reverse();
                        }
                        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                          const currentElement = event.target;
                          const currentIndex = candidateNodes.indexOf(currentElement);
                          candidateNodes = candidateNodes.slice(currentIndex + 1);
                        }
                        setTimeout(() => focusFirst2(candidateNodes));
                        event.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = React32.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME2, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME2, __scopeSelect);
  const [contentWrapper, setContentWrapper] = React32.useState(null);
  const [content, setContent] = React32.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const getItems = useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = React32.useRef(false);
  const shouldRepositionRef = React32.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = React32.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = clamp2(left, [
          CONTENT_MARGIN,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = clamp2(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(
          triggerMiddleToBottomEdge,
          selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth
        );
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(
          topEdgeToTriggerMiddle,
          contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight
        );
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced == null ? void 0 : onPlaced();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  useLayoutEffect2(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = React32.useState();
  useLayoutEffect2(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = React32.useCallback(
    (node) => {
      if (node && shouldRepositionRef.current === true) {
        position();
        focusSelectedItem == null ? void 0 : focusSelectedItem();
        shouldRepositionRef.current = false;
      }
    },
    [position, focusSelectedItem]
  );
  return /* @__PURE__ */ jsx42(
    SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
      children: /* @__PURE__ */ jsx42(
        "div",
        {
          ref: setContentWrapper,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: contentZIndex
          },
          children: /* @__PURE__ */ jsx42(
            Primitive.div,
            {
              ...popperProps,
              ref: composedRefs,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...popperProps.style
              }
            }
          )
        }
      )
    }
  );
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = React32.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */ jsx42(
    Content,
    {
      ...popperScope,
      ...popperProps,
      ref: forwardedRef,
      align,
      collisionPadding,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...popperProps.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME2, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = React32.useRef(0);
    return /* @__PURE__ */ jsxs28(Fragment5, { children: [
      /* @__PURE__ */ jsx42(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsx42(Collection.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ jsx42(
        Primitive.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...viewportProps.style
          },
          onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
            const viewport = event.currentTarget;
            const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
            if ((shouldExpandOnScrollRef == null ? void 0 : shouldExpandOnScrollRef.current) && contentWrapper) {
              const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
              if (scrolledBy > 0) {
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                const cssHeight = parseFloat(contentWrapper.style.height);
                const prevHeight = Math.max(cssMinHeight, cssHeight);
                if (prevHeight < availableHeight) {
                  const nextHeight = prevHeight + scrolledBy;
                  const clampedNextHeight = Math.min(availableHeight, nextHeight);
                  const heightDiff = nextHeight - clampedNextHeight;
                  contentWrapper.style.height = clampedNextHeight + "px";
                  if (contentWrapper.style.bottom === "0px") {
                    viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                    contentWrapper.style.justifyContent = "flex-end";
                  }
                }
              }
            }
            prevScrollTopRef.current = viewport.scrollTop;
          })
        }
      ) })
    ] });
  }
);
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = useId();
    return /* @__PURE__ */ jsx42(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: /* @__PURE__ */ jsx42(Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
  }
);
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ jsx42(Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
  }
);
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = React32.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = React32.useState(textValueProp != null ? textValueProp : "");
    const [isFocused, setIsFocused] = React32.useState(false);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => {
        var _a3;
        return (_a3 = contentContext.itemRefCallback) == null ? void 0 : _a3.call(contentContext, node, value, disabled);
      }
    );
    const textId = useId();
    const pointerTypeRef = React32.useRef("touch");
    const handleSelect = () => {
      if (!disabled) {
        context.onValueChange(value);
        context.onOpenChange(false);
      }
    };
    if (value === "") {
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    }
    return /* @__PURE__ */ jsx42(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: React32.useCallback((node) => {
          setTextValue((prevTextValue) => {
            var _a3;
            return prevTextValue || ((_a3 = node == null ? void 0 : node.textContent) != null ? _a3 : "").trim();
          });
        }, []),
        children: /* @__PURE__ */ jsx42(
          Collection.ItemSlot,
          {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ jsx42(
              Primitive.div,
              {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
                onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
                onClick: composeEventHandlers(itemProps.onClick, () => {
                  if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
                  if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
                  pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
                  var _a3;
                  pointerTypeRef.current = event.pointerType;
                  if (disabled) {
                    (_a3 = contentContext.onItemLeave) == null ? void 0 : _a3.call(contentContext);
                  } else if (pointerTypeRef.current === "mouse") {
                    event.currentTarget.focus({ preventScroll: true });
                  }
                }),
                onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
                  var _a3;
                  if (event.currentTarget === document.activeElement) {
                    (_a3 = contentContext.onItemLeave) == null ? void 0 : _a3.call(contentContext);
                  }
                }),
                onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
                  var _a3;
                  const isTypingAhead = ((_a3 = contentContext.searchRef) == null ? void 0 : _a3.current) !== "";
                  if (isTypingAhead && event.key === " ") return;
                  if (SELECTION_KEYS.includes(event.key)) handleSelect();
                  if (event.key === " ") event.preventDefault();
                })
              }
            )
          }
        )
      }
    );
  }
);
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = React32.useState(null);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => setItemTextNode(node),
      itemContext.onItemTextChange,
      (node) => {
        var _a3;
        return (_a3 = contentContext.itemTextRefCallback) == null ? void 0 : _a3.call(contentContext, node, itemContext.value, itemContext.disabled);
      }
    );
    const textContent = itemTextNode == null ? void 0 : itemTextNode.textContent;
    const nativeOption = React32.useMemo(
      () => /* @__PURE__ */ jsx42("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value),
      [itemContext.disabled, itemContext.value, textContent]
    );
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    useLayoutEffect2(() => {
      onNativeOptionAdd(nativeOption);
      return () => onNativeOptionRemove(nativeOption);
    }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
    return /* @__PURE__ */ jsxs28(Fragment5, { children: [
      /* @__PURE__ */ jsx42(Primitive.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
      itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? ReactDOM4.createPortal(itemTextProps.children, context.valueNode) : null
    ] });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ jsx42(Primitive.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React32.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React32.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll22 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      var handleScroll2 = handleScroll22;
      const viewport = contentContext.viewport;
      handleScroll22();
      viewport.addEventListener("scroll", handleScroll22);
      return () => viewport.removeEventListener("scroll", handleScroll22);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */ jsx42(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React32.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React32.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll22 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      var handleScroll2 = handleScroll22;
      const viewport = contentContext.viewport;
      handleScroll22();
      viewport.addEventListener("scroll", handleScroll22);
      return () => viewport.removeEventListener("scroll", handleScroll22);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */ jsx42(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React32.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React32.useRef(null);
  const getItems = useCollection(__scopeSelect);
  const clearAutoScrollTimer = React32.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React32.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  useLayoutEffect2(() => {
    var _a3;
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    (_a3 = activeItem == null ? void 0 : activeItem.ref.current) == null ? void 0 : _a3.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return /* @__PURE__ */ jsx42(
    Primitive.div,
    {
      "aria-hidden": true,
      ...scrollIndicatorProps,
      ref: forwardedRef,
      style: { flexShrink: 0, ...scrollIndicatorProps.style },
      onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
        var _a3;
        (_a3 = contentContext.onItemLeave) == null ? void 0 : _a3.call(contentContext);
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
        clearAutoScrollTimer();
      })
    }
  );
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ jsx42(Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
  }
);
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME2 = "SelectArrow";
var SelectArrow = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME2, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME2, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ jsx42(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
  }
);
SelectArrow.displayName = ARROW_NAME2;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = React32.forwardRef(
  ({ __scopeSelect, value, ...props }, forwardedRef) => {
    const ref = React32.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const prevValue = usePrevious(value);
    React32.useEffect(() => {
      const select = ref.current;
      if (!select) return;
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        selectProto,
        "value"
      );
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("change", { bubbles: true });
        setValue.call(select, value);
        select.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return /* @__PURE__ */ jsx42(
      Primitive.select,
      {
        ...props,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style },
        ref: composedRefs,
        defaultValue: value
      }
    );
  }
);
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = useCallbackRef(onSearchChange);
  const searchRef = React32.useRef("");
  const timerRef = React32.useRef(0);
  const handleTypeaheadSearch = React32.useCallback(
    (key) => {
      const search = searchRef.current + key;
      handleSearchChange(search);
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
    },
    [handleSearchChange]
  );
  const resetTypeahead = React32.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  React32.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root22 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal2 = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;

// ../components/ui/select.tsx
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { jsx as jsx43, jsxs as jsxs29 } from "react/jsx-runtime";
function Select2({
  ...props
}) {
  return /* @__PURE__ */ jsx43(Root22, { "data-slot": "select", ...props });
}
function SelectValue2({
  ...props
}) {
  return /* @__PURE__ */ jsx43(Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger2({
  className,
  size: size4 = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs29(
    Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size4,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx43(Icon, { asChild: true, children: /* @__PURE__ */ jsx43(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent2({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx43(Portal2, { children: /* @__PURE__ */ jsxs29(
    Content2,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx43(SelectScrollUpButton2, {}),
        /* @__PURE__ */ jsx43(
          Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx43(SelectScrollDownButton2, {})
      ]
    }
  ) });
}
function SelectItem2({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs29(
    Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx43("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx43(ItemIndicator, { children: /* @__PURE__ */ jsx43(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx43(ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx43(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx43(ChevronDownIcon, { className: "size-4" })
    }
  );
}

// ../components/zenziui/blocks/ai-card-generation/settings-generation.tsx
import {
  Palette,
  Image as Image3,
  Sun,
  User,
  Monitor
} from "lucide-react";
import { jsx as jsx44, jsxs as jsxs30 } from "react/jsx-runtime";
var SettingsGeneration = ({
  settings,
  onSettingsChange
}) => {
  return /* @__PURE__ */ jsxs30("div", { className: "space-y-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50", children: [
    /* @__PURE__ */ jsxs30("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx44(Palette, { className: "w-4 h-4 text-zinc-500" }),
        /* @__PURE__ */ jsx44("span", { className: "text-sm text-zinc-500", children: "Style" })
      ] }),
      /* @__PURE__ */ jsxs30(
        Select2,
        {
          value: settings.style,
          onValueChange: (value) => onSettingsChange({ ...settings, style: value }),
          children: [
            /* @__PURE__ */ jsx44(SelectTrigger2, { className: "w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700", children: /* @__PURE__ */ jsx44(SelectValue2, {}) }),
            /* @__PURE__ */ jsxs30(SelectContent2, { children: [
              /* @__PURE__ */ jsx44(SelectItem2, { value: "professional", children: "Professional" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "artistic", children: "Artistic" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "casual", children: "Casual" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "vintage", children: "Vintage" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs30("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx44(Image3, { className: "w-4 h-4 text-zinc-500" }),
        /* @__PURE__ */ jsx44("span", { className: "text-sm text-zinc-500", children: "Background" })
      ] }),
      /* @__PURE__ */ jsxs30(
        Select2,
        {
          value: settings.backgroundColor,
          onValueChange: (value) => onSettingsChange({
            ...settings,
            backgroundColor: value
          }),
          children: [
            /* @__PURE__ */ jsx44(SelectTrigger2, { className: "w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700", children: /* @__PURE__ */ jsx44(SelectValue2, {}) }),
            /* @__PURE__ */ jsxs30(SelectContent2, { children: [
              /* @__PURE__ */ jsx44(SelectItem2, { value: "studio", children: "Studio" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "gradient", children: "Gradient" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "solid", children: "Solid Color" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "transparent", children: "Transparent" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs30("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx44(Sun, { className: "w-4 h-4 text-zinc-500" }),
        /* @__PURE__ */ jsx44("span", { className: "text-sm text-zinc-500", children: "Lighting" })
      ] }),
      /* @__PURE__ */ jsxs30(
        Select2,
        {
          value: settings.lighting,
          onValueChange: (value) => onSettingsChange({ ...settings, lighting: value }),
          children: [
            /* @__PURE__ */ jsx44(SelectTrigger2, { className: "w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700", children: /* @__PURE__ */ jsx44(SelectValue2, {}) }),
            /* @__PURE__ */ jsxs30(SelectContent2, { children: [
              /* @__PURE__ */ jsx44(SelectItem2, { value: "soft", children: "Soft" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "dramatic", children: "Dramatic" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "natural", children: "Natural" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "studio", children: "Studio" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs30("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx44(User, { className: "w-4 h-4 text-zinc-500" }),
        /* @__PURE__ */ jsx44("span", { className: "text-sm text-zinc-500", children: "Pose" })
      ] }),
      /* @__PURE__ */ jsxs30(
        Select2,
        {
          value: settings.pose,
          onValueChange: (value) => onSettingsChange({ ...settings, pose: value }),
          children: [
            /* @__PURE__ */ jsx44(SelectTrigger2, { className: "w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700", children: /* @__PURE__ */ jsx44(SelectValue2, {}) }),
            /* @__PURE__ */ jsxs30(SelectContent2, { children: [
              /* @__PURE__ */ jsx44(SelectItem2, { value: "headshot", children: "Headshot" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "half-body", children: "Half Body" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "full-body", children: "Full Body" }),
              /* @__PURE__ */ jsx44(SelectItem2, { value: "profile", children: "Profile" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs30("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx44(Monitor, { className: "w-4 h-4 text-zinc-500" }),
        /* @__PURE__ */ jsx44("span", { className: "text-sm text-zinc-500", children: "Quality" })
      ] }),
      /* @__PURE__ */ jsx44("span", { className: "text-sm text-zinc-900 dark:text-zinc-100", children: "720p" })
    ] })
  ] });
};

// ../components/ui/input.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx45(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// ../components/zenziui/blocks/ai-card-generation/form-generation.tsx
import { jsx as jsx46, jsxs as jsxs31 } from "react/jsx-runtime";
var FormGeneration = ({
  onSubmit,
  settings,
  onSettingsChange
}) => {
  return /* @__PURE__ */ jsxs31(
    "form",
    {
      onSubmit,
      className: "flex flex-col gap-2 flex-1 p-4 justify-between",
      children: [
        /* @__PURE__ */ jsxs31("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs31("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx46(MessageCircle, { className: "w-4 h-4 text-zinc-500" }),
            /* @__PURE__ */ jsx46("span", { className: "text-sm text-zinc-500", children: "Prompt" })
          ] }),
          /* @__PURE__ */ jsx46(
            Input,
            {
              type: "text",
              size: 16,
              defaultValue: "Picture of a women with orange background",
              placeholder: "Describe the portrait you want to create...",
              className: "w-full bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 rounded-xl focus:outline-hidden focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-zinc-900 dark:focus-visible:border-zinc-100"
            }
          )
        ] }),
        /* @__PURE__ */ jsx46(
          SettingsGeneration,
          {
            settings,
            onSettingsChange
          }
        ),
        /* @__PURE__ */ jsxs31(
          "button",
          {
            type: "submit",
            className: "w-full h-9 flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 text-white text-sm font-medium rounded-xl transition-colors self-end",
            children: [
              /* @__PURE__ */ jsx46(Sparkles2, { className: "w-4 h-4" }),
              "Generate Portrait"
            ]
          }
        )
      ]
    }
  );
};

// ../components/zenziui/blocks/ai-card-generation/header-generation.tsx
import { jsx as jsx47, jsxs as jsxs32 } from "react/jsx-runtime";
var HeaderGeneration = () => {
  return /* @__PURE__ */ jsx47("div", { className: "p-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800", children: /* @__PURE__ */ jsx47("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs32("div", { children: [
    /* @__PURE__ */ jsx47("h3", { className: "text-sm font-medium text-zinc-900 dark:text-zinc-100", children: "AI Portrait Generation" }),
    /* @__PURE__ */ jsx47("p", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: "Create stunning portraits with AI" })
  ] }) }) });
};

// ../components/zenziui/blocks/ai-card-generation/ai-card-generation.tsx
import { jsx as jsx48, jsxs as jsxs33 } from "react/jsx-runtime";

// ../components/zenziui/blocks/ai-chat/multimodal-input.tsx
import { FileText, Languages, Search as Search2, SendIcon } from "lucide-react";
import { useState as useState33 } from "react";
import { jsx as jsx49, jsxs as jsxs34 } from "react/jsx-runtime";
var QuickActions = [
  {
    action: "Search the web",
    icon: Search2,
    gradient: "from-zinc-900/50 to-black/50",
    hoverGradient: "hover:from-zinc-800/50 hover:to-zinc-900/50"
  },
  {
    action: "Summarize this article",
    icon: FileText,
    gradient: "from-zinc-900/50 to-black/50",
    hoverGradient: "hover:from-zinc-800/50 hover:to-zinc-900/50"
  },
  {
    action: "Translate this text",
    icon: Languages,
    gradient: "from-zinc-900/50 to-black/50",
    hoverGradient: "hover:from-zinc-800/50 hover:to-zinc-900/50"
  }
];
function MultimodalInput() {
  const [input, setInput] = useState33("");
  function handleSubmit() {
    if (input.length > 0) {
      console.log("Sending message:", input);
    }
    setInput("");
  }
  return /* @__PURE__ */ jsxs34("div", { className: "flex flex-col gap-4 w-full max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs34("div", { className: "relative bg-zinc-900 rounded-xl border border-zinc-800", children: [
      /* @__PURE__ */ jsx49(
        Textarea,
        {
          placeholder: "What would you like to do?",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          },
          className: cn(
            "w-full px-4 py-3",
            "resize-none",
            "bg-transparent",
            "border-none",
            "text-zinc-100 text-base",
            "focus:outline-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "placeholder:text-zinc-500 placeholder:text-base",
            "min-h-[60px]"
          )
        }
      ),
      /* @__PURE__ */ jsx49("div", { className: "flex items-center justify-end p-3", children: /* @__PURE__ */ jsxs34(
        Button,
        {
          className: cn(
            "px-1.5 py-1.5 h-6 rounded-lg text-sm transition-colors hover:bg-zinc-800 flex items-center justify-between gap-1",
            "text-zinc-800",
            "disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          ),
          disabled: input.length === 0,
          onClick: () => {
            console.log("Sending message:", input);
          },
          children: [
            /* @__PURE__ */ jsx49(SendIcon, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx49("span", { className: "sr-only", children: "Send" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx49("div", { className: "grid sm:grid-cols-3 gap-2 w-full", children: QuickActions.map((item, index2) => {
      const Icon2 = item.icon;
      return /* @__PURE__ */ jsx49(
        react_exports.motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
          transition: {
            delay: 0.1 * index2,
            duration: 0.4,
            ease: "easeOut"
          },
          className: `${index2 > 1 ? "hidden sm:block" : "block"} h-full`,
          children: /* @__PURE__ */ jsx49(
            "button",
            {
              type: "button",
              className: "group w-full h-full text-left rounded-lg p-2.5\n                                    bg-zinc-900 hover:bg-zinc-800\n                                    border border-zinc-800 hover:border-zinc-700\n                                    transition-colors duration-300\n                                    flex flex-col justify-between",
              children: /* @__PURE__ */ jsxs34("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx49("div", { className: "p-1.5 rounded-md bg-zinc-800 border border-zinc-700", children: /* @__PURE__ */ jsx49(
                  Icon2,
                  {
                    size: 14,
                    className: "text-zinc-100"
                  }
                ) }),
                /* @__PURE__ */ jsx49("div", { className: "text-xs text-zinc-100 font-medium", children: item.action })
              ] })
            }
          )
        },
        index2
      );
    }) })
  ] });
}

// ../components/zenziui/blocks/ai-chat/ai-chat.tsx
import { jsx as jsx50, jsxs as jsxs35 } from "react/jsx-runtime";

// ../components/zenziui/blocks/auth-basic/auth-basic.tsx
var import_image3 = __toESM(require_image());

// ../components/zenziui/blocks/auth-basic/auth-form.tsx
import { useState as useState34 } from "react";
import { Loader2 as Loader22, LockIcon } from "lucide-react";
import { jsx as jsx51, jsxs as jsxs36 } from "react/jsx-runtime";
function AuthForm() {
  const [isLoading, setIsLoading] = useState34(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      console.log("Signing in with:", email, password);
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs36("form", { onSubmit: handleSubmit, className: "space-y-4", noValidate: true, children: [
    /* @__PURE__ */ jsxs36("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx51(
        "label",
        {
          htmlFor: "email",
          className: "text-sm font-medium text-black dark:text-white",
          children: "Email"
        }
      ),
      /* @__PURE__ */ jsxs36("div", { className: "relative", children: [
        /* @__PURE__ */ jsx51("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center w-4 h-4", children: "@" }),
        /* @__PURE__ */ jsx51(
          Input,
          {
            type: "email",
            name: "email",
            placeholder: "name@example.com",
            required: true,
            disabled: isLoading,
            className: "pl-10 h-12 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring",
            autoComplete: "email"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs36("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx51("label", { className: "text-sm font-medium text-black dark:text-white", children: "Password" }),
      /* @__PURE__ */ jsxs36("div", { className: "relative", children: [
        /* @__PURE__ */ jsx51(LockIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" }),
        /* @__PURE__ */ jsx51(
          Input,
          {
            type: "password",
            name: "password",
            placeholder: "Enter your password",
            required: true,
            disabled: isLoading,
            className: "pl-10 h-12 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs36(
      Button,
      {
        type: "submit",
        disabled: isLoading,
        className: "w-full h-12 text-base font-medium bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors",
        children: [
          isLoading && /* @__PURE__ */ jsx51(Loader22, { className: "mr-2 h-4 w-4 animate-spin" }),
          isLoading ? "Signing in..." : "Sign in"
        ]
      }
    )
  ] });
}

// ../components/zenziui/blocks/auth-basic/social-login.tsx
import { useState as useState35 } from "react";

// ../node_modules/@radix-ui/react-separator/dist/index.mjs
import * as React33 from "react";
import { jsx as jsx52 } from "react/jsx-runtime";
var NAME3 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator2 = React33.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsx52(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator2.displayName = NAME3;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root3 = Separator2;

// ../components/ui/separator.tsx
import { jsx as jsx53 } from "react/jsx-runtime";
function Separator3({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    Root3,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// ../components/zenziui/blocks/auth-basic/social-login.tsx
import { Loader2 as Loader23 } from "lucide-react";
import { Fragment as Fragment6, jsx as jsx54, jsxs as jsxs37 } from "react/jsx-runtime";
function SocialLogin() {
  const [isGoogleLoading, setIsGoogleLoading] = useState35(false);
  async function handleGoogleSignIn() {
    setIsGoogleLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Signing in with Google");
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  }
  function GoogleIcon() {
    return /* @__PURE__ */ jsx54(
      "svg",
      {
        className: "mr-2 h-4 w-4",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fab",
        "data-icon": "google",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 488 512",
        children: /* @__PURE__ */ jsx54(
          "path",
          {
            fill: "currentColor",
            d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxs37(Fragment6, { children: [
    /* @__PURE__ */ jsxs37("div", { className: "relative", children: [
      /* @__PURE__ */ jsx54("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx54(Separator3, { className: "w-full border-neutral-200 dark:border-neutral-800" }) }),
      /* @__PURE__ */ jsx54("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ jsx54("span", { className: "bg-white dark:bg-black px-2 text-neutral-600 dark:text-neutral-400", children: "Or continue with" }) })
    ] }),
    /* @__PURE__ */ jsxs37(
      Button,
      {
        variant: "outline",
        onClick: handleGoogleSignIn,
        disabled: isGoogleLoading,
        className: "w-full h-12 font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:bg-black dark:hover:bg-neutral-900 transition-colors",
        children: [
          isGoogleLoading ? /* @__PURE__ */ jsx54(Loader23, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx54(GoogleIcon, {}),
          isGoogleLoading ? "Connecting..." : "Sign in with Google"
        ]
      }
    )
  ] });
}

// ../components/zenziui/blocks/auth-basic/auth-basic.tsx
import { jsx as jsx55, jsxs as jsxs38 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/content.tsx
import { Calendar as Calendar2, CreditCard as CreditCard4, Wallet as Wallet3 } from "lucide-react";

// ../components/zenziui/blocks/dashboard/list-01.tsx
import {
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  SendHorizontal as SendHorizontal2,
  QrCode,
  Plus as Plus3,
  ArrowRight as ArrowRight8,
  CreditCard
} from "lucide-react";
import { jsx as jsx56, jsxs as jsxs39 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/list-02.tsx
import {
  ArrowUpRight as ArrowUpRight2,
  ArrowDownLeft as ArrowDownLeft2,
  Wallet as Wallet2,
  ShoppingCart,
  CreditCard as CreditCard2,
  ArrowRight as ArrowRight9
} from "lucide-react";
import { jsx as jsx57, jsxs as jsxs40 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/list-03.tsx
import {
  Calendar,
  ArrowRight as ArrowRight10,
  CheckCircle2 as CheckCircle23,
  Timer,
  AlertCircle as AlertCircle2,
  PiggyBank,
  TrendingUp,
  CreditCard as CreditCard3
} from "lucide-react";
import React34 from "react";
import { jsx as jsx58, jsxs as jsxs41 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/content.tsx
import { jsx as jsx59, jsxs as jsxs42 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/sidebar.tsx
var import_link = __toESM(require_link2());
var import_image4 = __toESM(require_image());
import {
  BarChart2,
  Receipt,
  Building2,
  CreditCard as CreditCard5,
  Folder,
  Wallet as Wallet4,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
  Menu
} from "lucide-react";
import { Home } from "lucide-react";
import { useState as useState36 } from "react";
import { Fragment as Fragment7, jsx as jsx60, jsxs as jsxs43 } from "react/jsx-runtime";

// ../components/ui/dropdown-menu.tsx
import { CheckIcon as CheckIcon2, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx61, jsxs as jsxs44 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/top-nav.tsx
var import_image6 = __toESM(require_image());
import { Bell, Sun as Sun2, Moon, ChevronRight } from "lucide-react";

// ../components/zenziui/blocks/dashboard/profile-01.tsx
var import_image5 = __toESM(require_image());
var import_link2 = __toESM(require_link2());
import {
  LogOut,
  MoveUpRight,
  Settings as Settings2,
  CreditCard as CreditCard6,
  FileText as FileText3
} from "lucide-react";
import { jsx as jsx62, jsxs as jsxs45 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/top-nav.tsx
var import_link3 = __toESM(require_link2());
import { jsx as jsx63, jsxs as jsxs46 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/layout.tsx
import { jsx as jsx64, jsxs as jsxs47 } from "react/jsx-runtime";

// ../components/zenziui/blocks/dashboard/dashboard.tsx
import { jsx as jsx65 } from "react/jsx-runtime";

// ../components/zenziui/blocks/minimal-shop/cart-drawer.tsx
import { X as X5 } from "lucide-react";
import { Fragment as Fragment8, jsx as jsx66, jsxs as jsxs48 } from "react/jsx-runtime";
function CartDrawer({
  cart,
  onClose,
  onRemoveFromCart
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return /* @__PURE__ */ jsxs48(Fragment8, { children: [
    /* @__PURE__ */ jsx66(
      react_exports.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 0.5 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx66(
      react_exports.motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        className: "fixed right-0 z-50 top-0 h-full w-full sm:w-[400px] bg-white dark:bg-zinc-900 shadow-xl",
        children: /* @__PURE__ */ jsxs48("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs48("div", { className: "flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800", children: [
            /* @__PURE__ */ jsx66("h2", { className: "text-lg font-medium", children: "Shopping Cart" }),
            /* @__PURE__ */ jsx66(
              "button",
              {
                onClick: onClose,
                className: "p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full",
                children: /* @__PURE__ */ jsx66(X5, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx66("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: cart.map((item) => /* @__PURE__ */ jsxs48(
            "div",
            {
              className: "flex gap-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",
              children: [
                /* @__PURE__ */ jsx66(
                  "img",
                  {
                    src: item.image,
                    alt: item.name,
                    className: "w-24 h-24 object-cover rounded-md"
                  }
                ),
                /* @__PURE__ */ jsxs48("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxs48("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsx66("h3", { className: "text-base font-medium truncate", children: item.name }),
                    /* @__PURE__ */ jsx66(
                      "button",
                      {
                        onClick: () => onRemoveFromCart(item.id),
                        className: "p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full ml-2",
                        children: /* @__PURE__ */ jsx66(X5, { className: "w-4 h-4" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs48("p", { className: "text-sm text-zinc-500 dark:text-zinc-400 mt-1", children: [
                    "Qty: ",
                    item.quantity
                  ] }),
                  /* @__PURE__ */ jsxs48("p", { className: "text-base font-medium mt-1", children: [
                    "$",
                    item.price * item.quantity
                  ] })
                ] })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxs48("div", { className: "p-4 border-t border-zinc-200 dark:border-zinc-800", children: [
            /* @__PURE__ */ jsxs48("div", { className: "flex justify-between mb-4", children: [
              /* @__PURE__ */ jsx66("span", { className: "text-base", children: "Total" }),
              /* @__PURE__ */ jsxs48("span", { className: "text-base font-medium", children: [
                "$",
                total
              ] })
            ] }),
            /* @__PURE__ */ jsx66("button", { className: "w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-base font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors", children: "Checkout" })
          ] })
        ] })
      }
    )
  ] });
}

// ../components/zenziui/blocks/minimal-shop/header.tsx
import { Search as Search3, ShoppingBag } from "lucide-react";
import { Menu as Menu2 } from "lucide-react";
import { jsx as jsx67, jsxs as jsxs49 } from "react/jsx-runtime";
function Header({
  cartCount,
  onCartOpen,
  searchQuery,
  onSearchChange
}) {
  return /* @__PURE__ */ jsx67("header", { className: "fixed w-full top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800", children: /* @__PURE__ */ jsx67("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs49("div", { className: "h-16 flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs49("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx67(
        "button",
        {
          type: "button",
          className: "p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full",
          children: /* @__PURE__ */ jsx67(Menu2, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsx67("span", { className: "text-sm font-medium", children: "Store" })
    ] }),
    /* @__PURE__ */ jsx67("div", { className: "flex-1 max-w-md", children: /* @__PURE__ */ jsxs49("div", { className: "relative", children: [
      /* @__PURE__ */ jsx67(
        "input",
        {
          type: "text",
          value: searchQuery,
          onChange: (e) => onSearchChange(e.target.value),
          placeholder: "Search products...",
          className: "w-full h-9 pl-9 pr-4 text-sm bg-zinc-100 dark:bg-zinc-900 rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
        }
      ),
      /* @__PURE__ */ jsx67(Search3, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" })
    ] }) }),
    /* @__PURE__ */ jsxs49(
      "button",
      {
        type: "button",
        onClick: onCartOpen,
        className: "relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full",
        children: [
          /* @__PURE__ */ jsx67(ShoppingBag, { className: "w-4 h-4" }),
          cartCount > 0 && /* @__PURE__ */ jsx67("span", { className: "absolute -top-1 -right-1 w-4 h-4 text-[10px] font-medium flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full", children: cartCount })
        ]
      }
    )
  ] }) }) });
}

// ../components/zenziui/blocks/minimal-shop/minimal-shop.tsx
import { useState as useState39 } from "react";

// ../components/zenziui/blocks/minimal-shop/product-grid.tsx
import { jsx as jsx68, jsxs as jsxs50 } from "react/jsx-runtime";
function ProductGrid({ products: products2, onProductSelect }) {
  return /* @__PURE__ */ jsx68("div", { className: "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2", children: products2.map((product) => /* @__PURE__ */ jsxs50(
    react_exports.motion.div,
    {
      layoutId: `product-${product.id}`,
      onClick: () => onProductSelect(product),
      className: "group cursor-pointer",
      whileHover: { y: -1 },
      transition: { duration: 0.2 },
      children: [
        /* @__PURE__ */ jsx68("div", { className: "aspect-[4/5] bg-white dark:bg-zinc-900 rounded-md overflow-hidden", children: /* @__PURE__ */ jsx68(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          }
        ) }),
        /* @__PURE__ */ jsxs50("div", { className: "mt-1.5 space-y-0.5", children: [
          /* @__PURE__ */ jsx68("h3", { className: "text-xs font-medium truncate", children: product.name }),
          /* @__PURE__ */ jsxs50("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs50("p", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: [
              "$",
              product.price
            ] }),
            /* @__PURE__ */ jsx68("p", { className: "text-[10px] text-zinc-400 dark:text-zinc-500", children: product.category })
          ] })
        ] })
      ]
    },
    product.id
  )) });
}

// ../components/zenziui/blocks/minimal-shop/product-modal.tsx
import { X as X6 } from "lucide-react";
import { useState as useState37 } from "react";
import { Fragment as Fragment9, jsx as jsx69, jsxs as jsxs51 } from "react/jsx-runtime";
function ProductModal({
  product,
  onClose,
  onAddToCart
}) {
  const [quantity, setQuantity] = useState37(1);
  return /* @__PURE__ */ jsxs51(Fragment9, { children: [
    /* @__PURE__ */ jsx69(
      react_exports.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 0.5 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx69(
      react_exports.motion.div,
      {
        layoutId: `product-${product.id}`,
        className: "fixed inset-x-4 bottom-0 md:inset-[25%] z-50 bg-white dark:bg-zinc-900 rounded-t-xl md:rounded-xl overflow-hidden max-h-[80vh] md:max-h-[500px]",
        children: /* @__PURE__ */ jsxs51("div", { className: "h-full md:flex", children: [
          /* @__PURE__ */ jsxs51("div", { className: "relative md:w-2/5", children: [
            /* @__PURE__ */ jsx69(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-[200px] md:h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx69(
              "button",
              {
                onClick: onClose,
                className: "absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full",
                children: /* @__PURE__ */ jsx69(X6, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs51("div", { className: "p-3 md:w-3/5 flex flex-col", children: [
            /* @__PURE__ */ jsxs51("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs51("div", { className: "flex justify-between items-start mb-2", children: [
                /* @__PURE__ */ jsxs51("div", { children: [
                  /* @__PURE__ */ jsx69("h2", { className: "text-sm font-medium", children: product.name }),
                  /* @__PURE__ */ jsx69("p", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: product.category })
                ] }),
                /* @__PURE__ */ jsxs51("p", { className: "text-sm font-medium", children: [
                  "$",
                  product.price
                ] })
              ] }),
              /* @__PURE__ */ jsxs51("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx69("p", { className: "text-xs text-zinc-600 dark:text-zinc-300", children: product.description }),
                /* @__PURE__ */ jsxs51("div", { className: "text-xs space-y-1", children: [
                  /* @__PURE__ */ jsxs51("p", { className: "text-zinc-500", children: [
                    "SKU: ",
                    product.id
                  ] }),
                  /* @__PURE__ */ jsx69("p", { className: "text-zinc-500", children: "Stock: Available" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx69(
              "button",
              {
                onClick: () => onAddToCart(product),
                className: "w-full mt-3 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors",
                children: "Add to Cart"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}

// ../components/zenziui/blocks/minimal-shop/top-bar.tsx
import { Search as Search4, ShoppingBag as ShoppingBag2, X as X7 } from "lucide-react";
import { useState as useState38, useEffect as useEffect20, useRef as useRef19 } from "react";
var import_link4 = __toESM(require_link2());
import { jsx as jsx70, jsxs as jsxs52 } from "react/jsx-runtime";
var categories = [
  "All",
  "Lighting",
  "Kitchenware",
  "Home Decor",
  "Plants",
  "Office",
  "Textiles"
];
function TopBar({ cartItemCount, onCartClick, onSearch }) {
  const [isSearchOpen, setIsSearchOpen] = useState38(false);
  const [selectedCategory, setSelectedCategory] = useState38("All");
  const [isScrolled, setIsScrolled] = useState38(false);
  const searchInputRef = useRef19(null);
  useEffect20(() => {
    const handleScroll2 = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);
  const handleKeyPress = (e) => {
    var _a3;
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      (_a3 = searchInputRef.current) == null ? void 0 : _a3.blur();
    }
  };
  return /* @__PURE__ */ jsx70(
    "div",
    {
      className: `sticky top-0 z-40 transition-all duration-200 ${isScrolled ? "bg-white/90 dark:bg-zinc-900/90 shadow-sm" : "bg-white/80 dark:bg-zinc-900/80"} backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800`,
      children: /* @__PURE__ */ jsxs52("div", { className: "flex items-center justify-between px-3 h-12", children: [
        /* @__PURE__ */ jsx70(
          import_link4.default,
          {
            href: "https://zenziui-beta.vercel.app/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm font-medium shrink-0",
            children: "Shop"
          }
        ),
        /* @__PURE__ */ jsx70("div", { className: "flex-1 px-8 overflow-x-auto flex items-center justify-center gap-6 scrollbar-none", children: categories.map((category) => /* @__PURE__ */ jsx70(
          "button",
          {
            type: "button",
            className: `whitespace-nowrap transition-colors ${selectedCategory === category ? "text-zinc-900 dark:text-white text-sm font-medium" : "text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white"}`,
            onClick: () => setSelectedCategory(category),
            children: category
          },
          category
        )) }),
        /* @__PURE__ */ jsxs52("div", { className: "flex items-center gap-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxs52(
            react_exports.motion.div,
            {
              className: "relative overflow-hidden p-1",
              initial: false,
              animate: { width: isSearchOpen ? "auto" : 0 },
              children: [
                /* @__PURE__ */ jsx70(
                  "input",
                  {
                    ref: searchInputRef,
                    type: "text",
                    placeholder: "Search products...",
                    className: `w-48 sm:w-56 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm px-3 py-1.5 
                                focus:outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700
                                transition-all duration-200 ${isSearchOpen ? "opacity-100" : "opacity-0"}`,
                    onChange: (e) => onSearch(e.target.value),
                    onKeyDown: handleKeyPress
                  }
                ),
                isSearchOpen && /* @__PURE__ */ jsx70(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setIsSearchOpen(false);
                      onSearch("");
                    },
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-zinc-200 \n                                    dark:hover:bg-zinc-700 rounded-full",
                    children: /* @__PURE__ */ jsx70(X7, { className: "w-4 h-4" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx70(
            "button",
            {
              type: "button",
              onClick: () => setIsSearchOpen(!isSearchOpen),
              className: `p-1.5 rounded-md transition-colors ${isSearchOpen ? "bg-zinc-100 dark:bg-zinc-800" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"} z-10`,
              children: /* @__PURE__ */ jsx70(Search4, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxs52(
            "button",
            {
              type: "button",
              onClick: onCartClick,
              className: "p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md relative",
              children: [
                /* @__PURE__ */ jsx70(ShoppingBag2, { className: "w-4 h-4" }),
                cartItemCount > 0 && /* @__PURE__ */ jsx70(
                  react_exports.motion.span,
                  {
                    initial: { scale: 0.5 },
                    animate: { scale: 1 },
                    className: "absolute -top-1 -right-1 bg-zinc-900 dark:bg-white \n                                    text-white dark:text-zinc-900 text-xs font-medium w-4 h-4 \n                                    flex items-center justify-center rounded-full",
                    children: cartItemCount
                  }
                )
              ]
            }
          )
        ] })
      ] })
    }
  );
}

// ../components/zenziui/blocks/minimal-shop/minimal-shop.tsx
import { jsx as jsx71, jsxs as jsxs53 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-01.tsx
import { ArrowRight as ArrowRight11 } from "lucide-react";
import { jsx as jsx72, jsxs as jsxs54 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-02.tsx
import { jsx as jsx73 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-03.tsx
import { Magnet } from "lucide-react";
import { useEffect as useEffect21, useState as useState40, useCallback as useCallback11 } from "react";
import { jsx as jsx74, jsxs as jsxs55 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-04.tsx
import { Zap } from "lucide-react";
import { useState as useState41 } from "react";
import { jsx as jsx75, jsxs as jsxs56 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-05.tsx
import { Trash2Icon } from "lucide-react";
import { useState as useState42 } from "react";
import { jsx as jsx76, jsxs as jsxs57 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-06.tsx
import { Check as Check2, Copy } from "lucide-react";
import { useState as useState43 } from "react";
import { Fragment as Fragment10, jsx as jsx77, jsxs as jsxs58 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-07.tsx
import { useState as useState44, useEffect as useEffect22 } from "react";
import { Download, Check as Check3, X as X8 } from "lucide-react";
import { Fragment as Fragment11, jsx as jsx78, jsxs as jsxs59 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-08.tsx
import { useState as useState45 } from "react";
import { Twitter, Facebook, Linkedin, Link as Link5 } from "lucide-react";
import { jsx as jsx79, jsxs as jsxs60 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-09.tsx
import { jsx as jsx80, jsxs as jsxs61 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-10.tsx
import { Sun as Sun3, Moon as Moon2, Laptop } from "lucide-react";
import { useState as useState46 } from "react";
import { jsx as jsx81, jsxs as jsxs62 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-11.tsx
import { ChevronRight as ChevronRight2 } from "lucide-react";
import { jsx as jsx82, jsxs as jsxs63 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-12.tsx
import { jsx as jsx83, jsxs as jsxs64 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-13.tsx
import { jsx as jsx84, jsxs as jsxs65 } from "react/jsx-runtime";

// ../components/zenziui/button/btn-14.tsx
import { ArrowUpRight as ArrowUpRight3 } from "lucide-react";
import { jsx as jsx85, jsxs as jsxs66 } from "react/jsx-runtime";
function Btn14({ label = "Submit", className, ...props }) {
  return /* @__PURE__ */ jsxs66(
    Button,
    {
      variant: "ghost",
      className: cn(
        "group relative w-1/2 h-8 px-3 rounded-lg overflow-hidden transition-all duration-500",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx85("div", { className: "absolute inset-0 rounded-lg p-[1px] bg-linear-to-b from-[#C76A1B] via-[#E67B1F] dark:via-[#2A1710] to-[#943F00]", children: /* @__PURE__ */ jsx85("div", { className: "absolute inset-0 bg-[#FFF8F3] dark:bg-[#1F1008] rounded-lg opacity-80" }) }),
        /* @__PURE__ */ jsx85("div", { className: "absolute inset-[1px] bg-[#FFF8F3] dark:bg-[#1F1008] rounded-lg opacity-85" }),
        /* @__PURE__ */ jsx85("div", { className: "absolute inset-[1px] bg-linear-to-r from-[#FFF8F3] via-[#FFE6D4] to-[#FFF8F3] dark:from-[#1F1008] dark:via-[#261409] dark:to-[#1F1008] rounded-lg opacity-90" }),
        /* @__PURE__ */ jsx85("div", { className: "absolute inset-[1px] bg-linear-to-b from-[#E67B1F]/30 via-[#FFE6D4] to-[#943F00]/30 dark:from-[#E67B1F]/40 dark:via-[#2A1710] dark:to-[#943F00]/30 rounded-lg opacity-90" }),
        /* @__PURE__ */ jsx85("div", { className: "absolute inset-[1px] bg-linear-to-br from-[#FFB067]/20 via-[#FFE6D4] to-[#3D1D07]/30 dark:from-[#FFB067]/10 dark:via-[#2A1710] dark:to-[#3D1D07]/50 rounded-lg" }),
        /* @__PURE__ */ jsxs66("div", { className: "relative flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx85("span", { className: "text-sm font-medium bg-linear-to-b from-[#C76A1B] to-[#943F00] dark:from-[#FFC69D] dark:to-[#FF9838] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,176,103,0.4)] tracking-tight", children: label }),
          /* @__PURE__ */ jsx85(ArrowUpRight3, { className: "w-4 h-4 text-[#C76A1B] dark:text-[#FFC69D]" })
        ] }),
        /* @__PURE__ */ jsx85("div", { className: "absolute inset-[1px] opacity-0 transition-opacity duration-300 bg-linear-to-r from-[#3D1D07]/20 via-[#FFB067]/10 to-[#3D1D07]/20 dark:from-[#3D1D07]/20 dark:via-[#FFB067]/10 dark:to-[#3D1D07]/20 group-hover:opacity-100 rounded-lg" })
      ]
    }
  );
}

// ../components/zenziui/button/btn-15.tsx
import { ArrowUpRight as ArrowUpRight4 } from "lucide-react";
import { jsx as jsx86, jsxs as jsxs67 } from "react/jsx-runtime";

// ../components/zenziui/card/card-01.tsx
import {
  Heart,
  MessageCircle as MessageCircle2,
  Share2,
  Bookmark,
  MoreHorizontal,
  Link as LinkIcon
} from "lucide-react";
import { jsx as jsx87, jsxs as jsxs68 } from "react/jsx-runtime";

// ../components/zenziui/card/card-02.tsx
var import_image7 = __toESM(require_image());
import { Calendar as Calendar3, Code2, ExternalLink, Share2 as Share22 } from "lucide-react";
import { jsx as jsx88, jsxs as jsxs69 } from "react/jsx-runtime";

// ../components/zenziui/card/card-03.tsx
var import_image8 = __toESM(require_image());
import { CheckCircle2 as CheckCircle24, Clock as Clock2 } from "lucide-react";
import { jsx as jsx89, jsxs as jsxs70 } from "react/jsx-runtime";

// ../components/zenziui/card/card-04.tsx
var import_image9 = __toESM(require_image());
import {
  SmilePlus,
  Send as Send2,
  MoreHorizontal as MoreHorizontal2,
  CheckCheck as CheckCheck2,
  Check as Check4,
  Users as Users3
} from "lucide-react";
import { jsx as jsx90, jsxs as jsxs71 } from "react/jsx-runtime";

// ../components/zenziui/card/card-05.tsx
import {
  Activity,
  ArrowUpRight as ArrowUpRight5,
  Plus as Plus5,
  Target,
  CheckCircle2 as CheckCircle25
} from "lucide-react";
import { useState as useState47 } from "react";
import { jsx as jsx91, jsxs as jsxs72 } from "react/jsx-runtime";

// ../components/zenziui/card/card-06.tsx
import { Sun as Sun4, Moon as Moon3, Thermometer, Wind, Power, Settings2 as Settings22 } from "lucide-react";
import { jsx as jsx92, jsxs as jsxs73 } from "react/jsx-runtime";

// ../components/zenziui/card/card-07.tsx
import { Calendar as Calendar4, Clock as Clock3, ArrowRight as ArrowRight13, Users as Users4 } from "lucide-react";
import { jsx as jsx93, jsxs as jsxs74 } from "react/jsx-runtime";

// ../components/zenziui/card/card-08.tsx
var import_image10 = __toESM(require_image());
var import_link5 = __toESM(require_link2());
import { ArrowUpRight as ArrowUpRight6 } from "lucide-react";
import { jsx as jsx94, jsxs as jsxs75 } from "react/jsx-runtime";

// ../components/zenziui/card/card-09.tsx
import { ArrowUpRight as ArrowUpRight7 } from "lucide-react";
import { jsx as jsx95, jsxs as jsxs76 } from "react/jsx-runtime";

// ../components/zenziui/card/card-10.tsx
import { Clock as Clock4, X as X9, Calendar as Calendar5 } from "lucide-react";

// ../components/ui/progress.tsx
import { jsx as jsx96 } from "react/jsx-runtime";

// ../components/zenziui/card/card-10.tsx
var import_image11 = __toESM(require_image());
import { Fragment as Fragment12, jsx as jsx97, jsxs as jsxs77 } from "react/jsx-runtime";

// ../components/zenziui/faq/faq-01.tsx
import { useState as useState48 } from "react";
import { Search as Search5 } from "lucide-react";

// ../components/ui/accordion.tsx
import { ChevronDownIcon as ChevronDownIcon2 } from "lucide-react";
import { jsx as jsx98, jsxs as jsxs78 } from "react/jsx-runtime";

// ../components/ui/badge.tsx
import { jsx as jsx99 } from "react/jsx-runtime";
var badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        brand: "border-1 border-green-500 bg-green-100 text-green-600 [a&]:hover:bg-green-400/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

// ../components/zenziui/faq/faq-01.tsx
import { jsx as jsx100, jsxs as jsxs79 } from "react/jsx-runtime";

// ../components/zenziui/faq/faq-02.tsx
import { useState as useState49 } from "react";
import { ChevronDown as ChevronDown2, Mail } from "lucide-react";
import { jsx as jsx101, jsxs as jsxs80 } from "react/jsx-runtime";

// ../components/zenziui/faq/faq-03.tsx
import { jsx as jsx102, jsxs as jsxs81 } from "react/jsx-runtime";

// ../components/zenziui/faq/faq-04.tsx
import { useState as useState50 } from "react";
import { jsx as jsx103, jsxs as jsxs82 } from "react/jsx-runtime";

// ../components/zenziui/input/input-01.tsx
import { useState as useState51, useRef as useRef20 } from "react";
import { X as X10, Check as Check5 } from "lucide-react";
import { jsx as jsx104, jsxs as jsxs83 } from "react/jsx-runtime";

// ../components/zenziui/input/input-02.tsx
import { useState as useState53, useRef as useRef21 } from "react";
import { X as X11, Check as Check6, Plus as Plus6 } from "lucide-react";

// ../hooks/use-tags.ts
import { useState as useState52 } from "react";

// ../components/zenziui/input/input-02.tsx
import { jsx as jsx105, jsxs as jsxs84 } from "react/jsx-runtime";

// ../components/zenziui/input/input-03.tsx
import { useState as useState54 } from "react";
import { Upload, X as X12, FileText as FileText4 } from "lucide-react";
import { jsx as jsx106, jsxs as jsxs85 } from "react/jsx-runtime";

// ../components/zenziui/input/input-04.tsx
import { useState as useState55 } from "react";
import { jsx as jsx107, jsxs as jsxs86 } from "react/jsx-runtime";

// ../components/zenziui/input/input-05.tsx
import { useState as useState56 } from "react";
import { Eye, EyeOff, Check as Check7, X as X13 } from "lucide-react";
import { jsx as jsx108, jsxs as jsxs87 } from "react/jsx-runtime";

// ../components/zenziui/input/input-06.tsx
import { useState as useState57, useRef as useRef22, useEffect as useEffect23, useCallback as useCallback12 } from "react";
import { jsx as jsx109, jsxs as jsxs88 } from "react/jsx-runtime";

// ../components/zenziui/input/input-08.tsx
import { useState as useState59 } from "react";
import { Check as Check8, Copy as Copy2 } from "lucide-react";

// ../hooks/use-copy-to-clipboard.ts
import * as React35 from "react";

// ../components/zenziui/input/input-08.tsx
import { jsx as jsx110, jsxs as jsxs89 } from "react/jsx-runtime";

// ../components/zenziui/input/input-09.tsx
var import_image12 = __toESM(require_image());
import { useState as useState60 } from "react";
import { jsx as jsx111, jsxs as jsxs90 } from "react/jsx-runtime";

// ../components/zenziui/input/input-10.tsx
import { useState as useState61 } from "react";
import { ChevronRight as ChevronRight3, ChevronLeft } from "lucide-react";
import { jsx as jsx112, jsxs as jsxs91 } from "react/jsx-runtime";

// ../components/zenziui/list/list-01.tsx
import { MessageSquare as MessageSquare2, Music, Store } from "lucide-react";
import { jsx as jsx113, jsxs as jsxs92 } from "react/jsx-runtime";

// ../components/zenziui/list/list-02.tsx
import {
  ArrowUpRight as ArrowUpRight8,
  ArrowDownLeft as ArrowDownLeft3,
  Wallet as Wallet5,
  ShoppingCart as ShoppingCart2,
  CreditCard as CreditCard7
} from "lucide-react";
import { jsx as jsx114, jsxs as jsxs93 } from "react/jsx-runtime";

// ../components/zenziui/list/list-03.tsx
import {
  CheckCircle2 as CheckCircle26,
  Circle,
  Clock as Clock5,
  Flag,
  MoreHorizontal as MoreHorizontal3,
  Plus as Plus7
} from "lucide-react";
import { jsx as jsx115, jsxs as jsxs94 } from "react/jsx-runtime";

// ../components/zenziui/list/list-04.tsx
import {
  ChevronRight as ChevronRight4,
  FileText as FileText5,
  Presentation,
  Users as Users5,
  BarChart
} from "lucide-react";
import { jsx as jsx116, jsxs as jsxs95 } from "react/jsx-runtime";

// ../components/zenziui/list/list-05.tsx
import { Play, MoreHorizontal as MoreHorizontal4, Heart as Heart2, Clock as Clock6, Music2 } from "lucide-react";
import { jsx as jsx117, jsxs as jsxs96 } from "react/jsx-runtime";

// ../components/zenziui/list/list-06.tsx
import { Heart as Heart3, MessageCircle as MessageCircle3, MoreHorizontal as MoreHorizontal5 } from "lucide-react";
import { jsx as jsx118, jsxs as jsxs97 } from "react/jsx-runtime";

// ../components/zenziui/pricing/pricing-01.tsx
import { useState as useState62 } from "react";
import {
  Sparkles as Sparkles4,
  ArrowRight as ArrowRight14,
  Shield as Shield2,
  Zap as Zap2,
  Infinity as Infinity2
} from "lucide-react";
import { jsx as jsx119, jsxs as jsxs98 } from "react/jsx-runtime";

// ../components/zenziui/pricing/pricing-02.tsx
import { Check as Check10, ArrowRight as ArrowRight15 } from "lucide-react";
import { jsx as jsx120, jsxs as jsxs99 } from "react/jsx-runtime";

// ../components/zenziui/pricing/pricing-03.tsx
import { useState as useState63 } from "react";
import { Check as Check11, ArrowRight as ArrowRight16 } from "lucide-react";
import { jsx as jsx121, jsxs as jsxs100 } from "react/jsx-runtime";

// ../components/zenziui/pricing/pricing-04.tsx
import { useState as useState64 } from "react";
import { Check as Check12, ArrowRight as ArrowRight17, Sparkles as Sparkles5, ChartNoAxesColumn } from "lucide-react";
import { jsx as jsx122, jsxs as jsxs101 } from "react/jsx-runtime";

// ../components/zenziui/pricing/pricing-05.tsx
import { Check as Check13 } from "lucide-react";
import { jsx as jsx123, jsxs as jsxs102 } from "react/jsx-runtime";

// ../components/zenziui/pricing/pricing-06.tsx
import { Check as Check14, Pencil, Star, Sparkles as Sparkles6 } from "lucide-react";
import { jsx as jsx124, jsxs as jsxs103 } from "react/jsx-runtime";

// ../components/zenziui/profile/profile-01.tsx
var import_image13 = __toESM(require_image());
var import_link6 = __toESM(require_link2());
import {
  LogOut as LogOut2,
  MoveUpRight as MoveUpRight2,
  Settings as Settings3,
  CreditCard as CreditCard8,
  FileText as FileText6
} from "lucide-react";
import { jsx as jsx125, jsxs as jsxs104 } from "react/jsx-runtime";

// ../components/zenziui/profile/profile-02.tsx
var import_image14 = __toESM(require_image());
import { Mail as Mail2, Link as LinkIcon2, MapPin, ExternalLink as ExternalLink2 } from "lucide-react";
import { jsx as jsx126, jsxs as jsxs105 } from "react/jsx-runtime";

// ../components/zenziui/profile/profile-03.tsx
import { Sparkles as Sparkles7 } from "lucide-react";

// ../components/ui/label.tsx
import { jsx as jsx127 } from "react/jsx-runtime";

// ../components/ui/avatar.tsx
import { jsx as jsx128 } from "react/jsx-runtime";

// ../components/zenziui/profile/profile-03.tsx
import { jsx as jsx129, jsxs as jsxs106 } from "react/jsx-runtime";

// ../components/zenziui/profile/profile-04.tsx
var import_image15 = __toESM(require_image());
import { LogOut as LogOut3, Flame, Shield as Shield3, ArrowUpRight as ArrowUpRight9 } from "lucide-react";
import { jsx as jsx130, jsxs as jsxs107 } from "react/jsx-runtime";

// ../components/zenziui/profile/profile-05.tsx
var import_image16 = __toESM(require_image());
import {
  Users as Users6,
  Mail as Mail3,
  Plus as Plus8,
  Settings2 as Settings23,
  Shield as Shield4,
  Github,
  Linkedin as Linkedin2,
  MapPin as MapPin2
} from "lucide-react";
import { jsx as jsx131, jsxs as jsxs108 } from "react/jsx-runtime";

// ../components/zenziui/text/text-01.tsx
import { jsx as jsx132, jsxs as jsxs109 } from "react/jsx-runtime";

// ../components/zenziui/text/text-02.tsx
import { jsx as jsx133, jsxs as jsxs110 } from "react/jsx-runtime";

// ../components/zenziui/text/text-03.tsx
import { jsx as jsx134 } from "react/jsx-runtime";

// ../components/zenziui/text/text-04.tsx
import { jsx as jsx135 } from "react/jsx-runtime";

// ../components/zenziui/text/text-05.tsx
import { jsx as jsx136 } from "react/jsx-runtime";

// ../components/zenziui/text/text-06.tsx
import { jsx as jsx137, jsxs as jsxs111 } from "react/jsx-runtime";

// ../components/zenziui/action-search-bar.tsx
import { useState as useState65, useEffect as useEffect24, useRef as useRef24 } from "react";
import { AnimatePresence, motion as motion6 } from "framer-motion";
import {
  Search as Search6,
  Send as Send3,
  BarChart2 as BarChart22,
  Video as Video2,
  PlaneTakeoff,
  AudioLines,
  LayoutGrid,
  Command,
  Settings as Settings4,
  FileText as FileText7,
  Calendar as Calendar6,
  Mail as Mail4,
  MessageSquare as MessageSquare3,
  Globe as Globe3,
  Zap as Zap3,
  Sparkles as Sparkles8,
  Palette as Palette2,
  Bookmark as Bookmark2
} from "lucide-react";
import { jsx as jsx138, jsxs as jsxs112 } from "react/jsx-runtime";

// ../components/zenziui/avatar-picker.tsx
import { useState as useState66 } from "react";
import { motion as motion7 } from "framer-motion";
import { jsx as jsx139, jsxs as jsxs113 } from "react/jsx-runtime";

// ../components/zenziui/background-circles.tsx
import clsx3 from "clsx";
import { useState as useState67 } from "react";
import { Fragment as Fragment13, jsx as jsx140, jsxs as jsxs114 } from "react/jsx-runtime";
var COLOR_VARIANTS = {
  primary: {
    border: [
      "border-emerald-500/60",
      "border-cyan-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-emerald-500/30"
  },
  secondary: {
    border: [
      "border-violet-500/60",
      "border-fuchsia-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-violet-500/30"
  },
  tertiary: {
    border: [
      "border-orange-500/60",
      "border-yellow-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-orange-500/30"
  },
  quaternary: {
    border: [
      "border-purple-500/60",
      "border-pink-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-purple-500/30"
  },
  quinary: {
    border: [
      "border-red-500/60",
      "border-rose-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-red-500/30"
  },
  // red
  senary: {
    border: [
      "border-blue-500/60",
      "border-sky-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-blue-500/30"
  },
  // blue
  septenary: {
    border: [
      "border-gray-500/60",
      "border-gray-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-gray-500/30"
  },
  octonary: {
    border: [
      "border-red-500/60",
      "border-rose-400/50",
      "border-slate-600/30"
    ],
    gradient: "from-red-500/30"
  }
};
var AnimatedGrid = () => /* @__PURE__ */ jsx140(
  react_exports.motion.div,
  {
    className: "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]",
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"]
    },
    transition: {
      duration: 40,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear"
    },
    children: /* @__PURE__ */ jsx140("div", { className: "h-full w-full [background-image:repeating-linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px,transparent_4%)] opacity-20" })
  }
);
function BackgroundCircles({
  title = "Background Circles",
  description = "Optional Description",
  className,
  variant = "octonary"
}) {
  const variantStyles = COLOR_VARIANTS[variant];
  const variants = Object.keys(
    COLOR_VARIANTS
  );
  return /* @__PURE__ */ jsxs114(
    "div",
    {
      className: clsx3(
        "relative flex h-screen w-full items-center justify-center overflow-hidden",
        "bg-white dark:bg-black/5",
        className
      ),
      children: [
        /* @__PURE__ */ jsx140(AnimatedGrid, {}),
        /* @__PURE__ */ jsx140(react_exports.motion.div, { className: "absolute h-[480px] w-[480px]", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx140(
          react_exports.motion.div,
          {
            className: clsx3(
              "absolute inset-0 rounded-full",
              "border-2 bg-linear-to-br to-transparent",
              variantStyles.border[i],
              variantStyles.gradient
            ),
            animate: {
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.8, 1, 0.8]
            },
            transition: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            children: /* @__PURE__ */ jsx140(
              "div",
              {
                className: clsx3(
                  "absolute inset-0 rounded-full mix-blend-screen",
                  `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                    "from-",
                    ""
                  )}/10%,transparent_70%)]`
                )
              }
            )
          },
          i
        )) }),
        /* @__PURE__ */ jsxs114(
          react_exports.motion.div,
          {
            className: "relative z-10 text-center",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsx140(
                "h1",
                {
                  className: clsx3(
                    "text-5xl font-bold tracking-tight md:text-7xl",
                    "bg-linear-to-b from-slate-950 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent",
                    "drop-shadow-[0_0_32px_rgba(94,234,212,0.4)]"
                  ),
                  children: title
                }
              ),
              /* @__PURE__ */ jsxs114(
                react_exports.motion.p,
                {
                  className: "mt-6 text-lg md:text-xl dark:text-white text-slate-950",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.2 },
                  children: [
                    description,
                    /* @__PURE__ */ jsx140("span", { className: "mx-3 opacity-50", children: "\xB7" }),
                    "ZenZi UI"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs114("div", { className: "absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]", children: [
          /* @__PURE__ */ jsx140("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0F766E/30%,transparent_70%)] blur-[120px]" }),
          /* @__PURE__ */ jsx140("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2DD4BF/15%,transparent)] blur-[80px]" })
        ] })
      ]
    }
  );
}

// ../components/zenziui/background-paths.tsx
import { motion as motion9 } from "framer-motion";
import { jsx as jsx141, jsxs as jsxs115 } from "react/jsx-runtime";

// ../components/zenziui/beams-background.tsx
import { useEffect as useEffect25, useRef as useRef25 } from "react";
import { jsx as jsx142, jsxs as jsxs116 } from "react/jsx-runtime";

// ../components/zenziui/bento-grid.tsx
import {
  CheckCircle,
  TrendingUp as TrendingUp2,
  Video as Video3,
  Globe as Globe4
} from "lucide-react";
import { jsx as jsx143, jsxs as jsxs117 } from "react/jsx-runtime";

// ../components/zenziui/checkout-interaction.tsx
import { useState as useState68 } from "react";
import { Minus as Minus2, Plus as Plus9, ShoppingCart as ShoppingCart3, X as X15, CreditCard as CreditCard9 } from "lucide-react";
var import_image17 = __toESM(require_image());

// ../node_modules/@number-flow/react/dist/index.mjs
import * as React37 from "react";

// ../node_modules/esm-env/browser-fallback.js
var browser_fallback_default = typeof window !== "undefined";

// ../node_modules/esm-env/dev-fallback.js
var _a, _b;
var node_env = (_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV;
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

// ../node_modules/number-flow/dist/lite-BTIaQdTe.mjs
var u = (n, t, e) => {
  const i = document.createElement(n), [s, a] = Array.isArray(t) ? [void 0, t] : [t, e];
  return s && Object.assign(i, s), a == null || a.forEach((r) => i.appendChild(r)), i;
};
var F = (n, t) => {
  var _a3;
  var e;
  return t === "left" ? n.offsetLeft : ((_a3 = (e = n.offsetParent instanceof HTMLElement ? n.offsetParent : null) == null ? void 0 : e.offsetWidth) != null ? _a3 : 0) - n.offsetWidth - n.offsetLeft;
};
var H = (n) => n.offsetWidth > 0 && n.offsetHeight > 0;
var st = (n, t) => {
  browser_fallback_default && !customElements.get(n) && customElements.define(n, t);
};
function X14(n, t, { reverse: e = false } = {}) {
  const i = n.length;
  for (let s = e ? i - 1 : 0; e ? s >= 0 : s < i; e ? s-- : s++)
    t(n[s], s);
}
var I = String.raw;
var V = String.raw;
var O = browser_fallback_default && (() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
})();
var z = browser_fallback_default && typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)");
var A = browser_fallback_default && typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null;
var $ = "--_number-flow-d-opacity";
var U = "--_number-flow-d-width";
var S = "--_number-flow-dx";
var j = "--_number-flow-d";
var Y = (() => {
  try {
    return CSS.registerProperty({
      name: $,
      syntax: "<number>",
      inherits: false,
      initialValue: "0"
    }), CSS.registerProperty({
      name: S,
      syntax: "<length>",
      inherits: true,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: U,
      syntax: "<number>",
      inherits: false,
      initialValue: "0"
    }), CSS.registerProperty({
      name: j,
      syntax: "<number>",
      inherits: true,
      initialValue: "0"
    }), true;
  } catch (e) {
    return false;
  }
})();
var P = "var(--number-flow-char-height, 1em)";
var f = "var(--number-flow-mask-height, 0.25em)";
var k = `calc(${f} / 2)`;
var E = "var(--number-flow-mask-width, 0.5em)";
var m = `calc(${E} / var(--scale-x))`;
var w = "#000 0, transparent 71%";
var M = V`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${P} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${U}) / var(--width));transform:translateX(var(${S})) scaleX(var(--scale-x));margin:0 calc(-1 * ${E});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${m},#000 calc(100% - ${m}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${f},#000 calc(100% - ${f}),transparent 100% ),radial-gradient(at bottom right,${w}),radial-gradient(at bottom left,${w}),radial-gradient(at top left,${w}),radial-gradient(at top right,${w});-webkit-mask-size:100% calc(100% - ${f} * 2),calc(100% - ${m} * 2) 100%,${m} ${f},${m} ${f},${m} ${f},${m} ${f};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${k} ${E};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${S})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${j})}.digit__num,.number .section::after{padding:${k} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${$}))}`;
var G = browser_fallback_default ? HTMLElement : class {
};
var K = V`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${P} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${k} 0}.symbol{white-space:pre}`;
var q = z && O && Y;
var b;
var J = class extends G {
  constructor() {
    super(), this.created = false, this.batched = false;
    const { animated: t, ...e } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, e);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var e;
    this.animated !== t && (this._animated = t, (e = this.shadowRoot) == null || e.getAnimations().forEach((i) => i.finish()));
  }
  /**
   * @internal
   */
  set data(t) {
    var _a3;
    var o;
    if (t == null)
      return;
    const { pre: e, integer: i, fraction: s, post: a, value: r } = t;
    if (this.created) {
      const c = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(c.value, r) : this.trend, this.computedAnimated = q && this._animated && (!this.respectMotionPreference || !(A != null && A.matches)) && // https://github.com/barvian/number-flow/issues/9
      H(this), (o = this.plugins) == null || o.forEach((d) => {
        var p;
        return (p = d.onUpdate) == null ? void 0 : p.call(d, t, c, this);
      }), this.batched || this.willUpdate(), this._pre.update(e), this._num.update({ integer: i, fraction: s }), this._post.update(a), this.batched || this.didUpdate();
    } else {
      this._data = t, this.attachShadow({ mode: "open" });
      try {
        (_a3 = this._internals) != null ? _a3 : this._internals = this.attachInternals(), this._internals.role = "img";
      } catch (e2) {
      }
      if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        b || (b = new CSSStyleSheet(), b.replaceSync(M)), this.shadowRoot.adoptedStyleSheets = [b];
      else {
        const c = document.createElement("style");
        c.textContent = M, this.shadowRoot.appendChild(c);
      }
      this._pre = new N(this, e, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new Q(this, i, s), this.shadowRoot.appendChild(this._num.el), this._post = new N(this, a, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el), this.created = true;
    }
    try {
      this._internals.ariaLabel = t.valueAsString;
    } catch (e2) {
    }
  }
  /**
   * @internal
   */
  willUpdate() {
    this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
  }
  /**
   * @internal
   */
  didUpdate() {
    if (!this.computedAnimated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
};
J.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: true,
  trend: (n, t) => Math.sign(t - n),
  respectMotionPreference: true,
  plugins: void 0,
  digits: void 0
};
var Q = class {
  constructor(t, e, i, { className: s, ...a } = {}) {
    this.flow = t, this._integer = new L(t, e, {
      justify: "right",
      part: "integer"
    }), this._fraction = new L(t, i, {
      justify: "left",
      part: "fraction"
    }), this._inner = u("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = u("span", {
      ...a,
      part: "number",
      className: `number ${s != null ? s : ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: e }) {
    this._integer.update(t), this._fraction.update(e);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const e = this._prevLeft - t.left, i = this.el.offsetWidth, s = this._prevWidth - i;
    this.el.style.setProperty("--width", String(i)), this.el.animate({
      [S]: [`${e}px`, "0px"],
      [U]: [s, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
};
var W = class {
  constructor(t, e, { justify: i, className: s, ...a }, r) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (c) => () => {
      this.children.delete(c);
    }, this.justify = i;
    const o = e.map((c) => this.addChar(c).el);
    this.el = u("span", {
      ...a,
      className: `section section--justify-${i} ${s != null ? s : ""}`
    }, r ? r(o) : o);
  }
  addChar(t, { startDigitsAtZero: e = false, ...i } = {}) {
    const s = t.type === "integer" || t.type === "fraction" ? new D(this, t.type, e ? 0 : t.value, t.pos, {
      ...i,
      onRemove: this.onCharRemove(t.key)
    }) : new tt(this, t.type, t.value, {
      ...i,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, s), s;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((e) => {
      e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${F(e.el, this.justify)}px`;
    }), t.forEach((e) => {
      e.el.setAttribute("inert", ""), e.present = false;
    });
  }
  addNewAndUpdateExisting(t) {
    const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = this.justify === "left", a = s ? "prepend" : "append";
    if (X14(t, (r) => {
      let o;
      this.children.has(r.key) ? (o = this.children.get(r.key), i.set(r, o), this.unpop(o), o.present = true) : (o = this.addChar(r, { startDigitsAtZero: true, animateIn: true }), e.set(r, o)), this.el[a](o.el);
    }, { reverse: s }), this.flow.computedAnimated) {
      const r = this.el.getBoundingClientRect();
      e.forEach((o) => {
        o.willUpdate(r);
      });
    }
    e.forEach((r, o) => {
      r.update(o.value);
    }), i.forEach((r, o) => {
      r.update(o.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((e) => e.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((s) => s.didUpdate(t));
    const e = t[this.justify], i = this._prevOffset - e;
    i && this.children.size && this.el.animate({
      transform: [`translateX(${i}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
};
var L = class extends W {
  update(t) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i, s) => {
      t.find((a) => a.key === s) || e.set(s, i), this.unpop(i);
    }), this.addNewAndUpdateExisting(t), e.forEach((i) => {
      i instanceof D && i.update(0);
    }), this.pop(e);
  }
};
var N = class extends W {
  update(t) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i, s) => {
      t.find((a) => a.key === s) || e.set(s, i);
    }), this.pop(e), this.addNewAndUpdateExisting(t);
  }
};
var R = class {
  constructor(t, e, { onRemove: i, animateIn: s = false } = {}) {
    this.flow = t, this.el = e, this._present = true, this._remove = () => {
      var a;
      this.el.remove(), (a = this._onRemove) == null || a.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && s && this.el.animate({
      [$]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = i;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [$]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: true
      });
    }
  }
};
var B = class extends R {
  constructor(t, e, i, s) {
    super(t.flow, i, s), this.section = t, this.value = e, this.el = i;
  }
};
var D = class extends B {
  constructor(t, e, i, s, a) {
    var _a3;
    var d, p;
    const r = ((_a3 = (p = (d = t.flow.digits) == null ? void 0 : d[s]) == null ? void 0 : p.max) != null ? _a3 : 9) + 1, o = Array.from({ length: r }).map((x, g) => {
      const y = u("span", { className: "digit__num" }, [
        document.createTextNode(String(g))
      ]);
      return g !== i && y.setAttribute("inert", ""), y.style.setProperty("--n", String(g)), y;
    }), c = u("span", {
      part: `digit ${e}-digit`,
      className: "digit"
    }, o);
    c.style.setProperty("--current", String(i)), c.style.setProperty("--length", String(r)), super(t, i, c, a), this.pos = s, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = o, this.length = r;
  }
  willUpdate(t) {
    const e = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const i = e[this.section.justify] - t[this.section.justify], s = e.width / 2;
    this._prevCenter = this.section.justify === "left" ? i + s : i - s;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((e, i) => i === t ? e.removeAttribute("inert") : e.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    var _a3;
    const e = this.el.getBoundingClientRect(), i = e[this.section.justify] - t[this.section.justify], s = e.width / 2, a = this.section.justify === "left" ? i + s : i - s, r = this._prevCenter - a;
    r && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const o = this.getDelta();
    o && (this.el.classList.add("is-spinning"), this.el.animate({
      [j]: [-o, 0]
    }, {
      ...(_a3 = this.flow.spinTiming) != null ? _a3 : this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: true }));
  }
  getDelta() {
    var i;
    if (this.flow.plugins)
      for (const s of this.flow.plugins) {
        const a = (i = s.getDelta) == null ? void 0 : i.call(s, this.value, this._prevValue, this);
        if (a != null)
          return a;
      }
    const t = this.value - this._prevValue, e = this.flow.computedTrend || Math.sign(t);
    return e < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : e > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : t;
  }
};
var tt = class extends B {
  constructor(t, e, i, s) {
    const a = u("span", {
      className: "symbol__value",
      textContent: i
    });
    super(t, i, u("span", {
      part: `symbol ${e}`,
      className: "symbol"
    }, [a]), s), this.type = e, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (r) => () => {
      this._children.delete(r);
    }, this._children.set(i, new R(this.flow, a, {
      onRemove: this._onChildRemove(i)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const e = this._children.get(this.value);
      e && (e.present = false);
      const i = this._children.get(t);
      if (i)
        i.present = true;
      else {
        const s = u("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(s), this._children.set(t, new R(this.flow, s, {
          animateIn: true,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const i = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], s = this._prevOffset - i;
    s && this.el.animate({
      transform: [`translateX(${s}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
};

// ../node_modules/@number-flow/react/dist/NumberFlow-client-48rw3j0J.mjs
import * as React36 from "react";
var _a2;
var REACT_MAJOR = parseInt((_a2 = React36.version.match(/^(\d+)\./)) == null ? void 0 : _a2[1]);
var isReact19 = REACT_MAJOR >= 19;
var OBSERVED_ATTRIBUTES = [
  "data",
  "digits"
];
var NumberFlowElement = class extends J {
  attributeChangedCallback(attr, _oldValue, newValue) {
    this[attr] = JSON.parse(newValue);
  }
};
NumberFlowElement.observedAttributes = isReact19 ? [] : OBSERVED_ATTRIBUTES;
st("number-flow-react", NumberFlowElement);

// ../components/zenziui/checkout-interaction.tsx
import { jsx as jsx144, jsxs as jsxs118 } from "react/jsx-runtime";

// ../components/zenziui/currency-transfer.tsx
import { useState as useState69 } from "react";
import { motion as motion10, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { ArrowRight as ArrowRight18, RefreshCw, Copy as Copy3, Check as Check15 } from "lucide-react";
import { jsx as jsx145, jsxs as jsxs119 } from "react/jsx-runtime";
var draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.2,
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        ease: "easeInOut"
      },
      opacity: { delay: i * 0.2, duration: 0.2 }
    }
  })
};
function Checkmark({ size: size4 = 100, strokeWidth = 2, color = "currentColor", className = "" }) {
  return /* @__PURE__ */ jsxs119(
    motion10.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 100 100",
      initial: "hidden",
      animate: "visible",
      className,
      children: [
        /* @__PURE__ */ jsx145("title", { children: "Animated Checkmark" }),
        /* @__PURE__ */ jsx145(
          motion10.circle,
          {
            cx: "50",
            cy: "50",
            r: "40",
            stroke: color,
            variants: draw,
            custom: 0,
            style: {
              strokeWidth,
              strokeLinecap: "round",
              fill: "transparent"
            }
          }
        ),
        /* @__PURE__ */ jsx145(
          motion10.path,
          {
            d: "M30 50L45 65L70 35",
            stroke: color,
            variants: draw,
            custom: 1,
            style: {
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "transparent"
            }
          }
        )
      ]
    }
  );
}

// ../components/zenziui/hand-written-title.tsx
import { jsx as jsx146, jsxs as jsxs120 } from "react/jsx-runtime";

// ../components/zenziui/matrix-text.tsx
import { useState as useState70, useEffect as useEffect27, useCallback as useCallback13, useMemo as useMemo9 } from "react";
import { jsx as jsx147 } from "react/jsx-runtime";

// ../components/zenziui/particle-button.tsx
import { useState as useState71, useRef as useRef27 } from "react";
import { MousePointerClick } from "lucide-react";
import { Fragment as Fragment14, jsx as jsx148, jsxs as jsxs121 } from "react/jsx-runtime";

// ../components/zenziui/particles-background.tsx
import { useEffect as useEffect28, useRef as useRef28 } from "react";
import { jsx as jsx149, jsxs as jsxs122 } from "react/jsx-runtime";

// ../components/zenziui/toolbar.tsx
import * as React38 from "react";
import {
  Filter,
  Settings as Settings5,
  Download as Download2,
  Share2 as Share23,
  User as User2,
  Bell as Bell2,
  Sun as Sun5,
  Edit2,
  Lock as Lock2
} from "lucide-react";
import { jsx as jsx150, jsxs as jsxs123 } from "react/jsx-runtime";
var buttonVariants2 = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem"
  },
  animate: (isSelected) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem"
  })
};
var spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 }
};
var notificationVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: -10 },
  exit: { opacity: 0, y: -20 }
};
var lineVariants = {
  initial: { scaleX: 0, x: "-50%" },
  animate: {
    scaleX: 1,
    x: "0%",
    transition: { duration: 0.2, ease: "easeOut" }
  },
  exit: {
    scaleX: 0,
    x: "50%",
    transition: { duration: 0.2, ease: "easeIn" }
  }
};
var transition = { type: "spring", bounce: 0, duration: 0.4 };
function Toolbar({
  className,
  activeColor = "text-primary",
  onSearch
}) {
  var _a3;
  const [selected, setSelected] = React38.useState("filter");
  const [isToggled, setIsToggled] = React38.useState(false);
  const [activeNotification, setActiveNotification] = React38.useState(null);
  const outsideClickRef = React38.useRef(null);
  const toolbarItems = [
    { id: "filter", title: "Filter", icon: Filter },
    { id: "settings", title: "Settings", icon: Settings5 },
    { id: "download", title: "Download", icon: Download2 },
    { id: "share", title: "Share", icon: Share23 },
    { id: "notifications", title: "Notifications", icon: Bell2 },
    { id: "profile", title: "Profile", icon: User2 },
    { id: "theme", title: "Theme", icon: Sun5 }
  ];
  const handleItemClick = (itemId) => {
    setSelected(selected === itemId ? null : itemId);
    setActiveNotification(itemId);
    setTimeout(() => setActiveNotification(null), 1500);
  };
  return /* @__PURE__ */ jsx150("div", { className: "space-y-2", children: /* @__PURE__ */ jsxs123(
    "div",
    {
      ref: outsideClickRef,
      className: cn(
        "flex items-center gap-3 p-2 relative",
        "bg-background",
        "border rounded-xl",
        "transition-all duration-200",
        className
      ),
      children: [
        /* @__PURE__ */ jsx150(react_exports.AnimatePresence, { children: activeNotification && /* @__PURE__ */ jsxs123(
          react_exports.motion.div,
          {
            variants: notificationVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: { duration: 0.3 },
            className: "absolute -top-8 left-1/2 transform -translate-x-1/2 z-50",
            children: [
              /* @__PURE__ */ jsxs123("div", { className: "bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs", children: [
                (_a3 = toolbarItems.find(
                  (item) => item.id === activeNotification
                )) == null ? void 0 : _a3.title,
                " ",
                "clicked!"
              ] }),
              /* @__PURE__ */ jsx150(
                react_exports.motion.div,
                {
                  variants: lineVariants,
                  initial: "initial",
                  animate: "animate",
                  exit: "exit",
                  className: "absolute -bottom-1 left-1/2 w-full h-[2px] bg-primary origin-left"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs123("div", { className: "flex items-center gap-2", children: [
          toolbarItems.map((item) => /* @__PURE__ */ jsxs123(
            react_exports.motion.button,
            {
              variants: buttonVariants2,
              initial: false,
              animate: "animate",
              custom: selected === item.id,
              onClick: () => handleItemClick(item.id),
              transition,
              className: cn(
                "relative flex items-center rounded-none px-3 py-2",
                "text-sm font-medium transition-colors duration-300",
                selected === item.id ? "bg-[#1F9CFE] text-white rounded-lg" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ jsx150(
                  item.icon,
                  {
                    size: 16,
                    className: cn(
                      selected === item.id && "text-white"
                    )
                  }
                ),
                /* @__PURE__ */ jsx150(react_exports.AnimatePresence, { initial: false, children: selected === item.id && /* @__PURE__ */ jsx150(
                  react_exports.motion.span,
                  {
                    variants: spanVariants,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    transition,
                    className: "overflow-hidden",
                    children: item.title
                  }
                ) })
              ]
            },
            item.id
          )),
          /* @__PURE__ */ jsxs123(
            react_exports.motion.button,
            {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: () => setIsToggled(!isToggled),
              className: "flex items-center gap-2 px-4 py-2\n                            bg-primary text-primary-foreground\n                            rounded-xl \n                            border border-primary/30\n                            shadow-sm \n                            transition-all duration-200\n                            hover:shadow-md \n                            hover:bg-primary/90\n                            hover:border-primary/40\n                            active:border-primary/50",
              children: [
                isToggled ? /* @__PURE__ */ jsx150(Edit2, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx150(Lock2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx150("span", { className: "text-sm font-medium", children: isToggled ? "On" : "Off" })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// ../components/zenziui/tweet-card.tsx
import { VerifiedIcon } from "lucide-react";
var import_link7 = __toESM(require_link2());
import { jsx as jsx151, jsxs as jsxs124 } from "react/jsx-runtime";

// ../components/zenziui/vercel-v0-chat.tsx
import { useState as useState73 } from "react";
import {
  ImageIcon,
  FileUp as FileUp2,
  Figma as Figma2,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip as Paperclip5,
  PlusIcon
} from "lucide-react";
import { jsx as jsx152, jsxs as jsxs125 } from "react/jsx-runtime";
function VercelV0Chat() {
  const [value, setValue] = useState73("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
        adjustHeight(true);
      }
    }
  };
  return /* @__PURE__ */ jsxs125("div", { className: "flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-4 sm:space-y-8", children: [
    /* @__PURE__ */ jsx152("h1", { className: "text-2xl sm:text-4xl font-bold text-black dark:text-white text-center", children: "What can I help you ship?" }),
    /* @__PURE__ */ jsxs125("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs125("div", { className: "relative bg-neutral-900 rounded-xl border border-neutral-800", children: [
        /* @__PURE__ */ jsx152("div", { className: "overflow-y-auto", children: /* @__PURE__ */ jsx152(
          Textarea,
          {
            ref: textareaRef,
            value,
            onChange: (e) => {
              setValue(e.target.value);
              adjustHeight();
            },
            onKeyDown: handleKeyDown,
            placeholder: "Ask v0 a question...",
            className: cn(
              "w-full px-4 py-3",
              "resize-none",
              "bg-transparent",
              "border-none",
              "text-white text-sm",
              "focus:outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-neutral-500 placeholder:text-sm",
              "min-h-[60px]"
            ),
            style: {
              overflow: "hidden"
            }
          }
        ) }),
        /* @__PURE__ */ jsxs125("div", { className: "flex items-center justify-between p-3", children: [
          /* @__PURE__ */ jsx152("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs125(
            "button",
            {
              type: "button",
              className: "group p-2 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx152(Paperclip5, { className: "w-4 h-4 text-white" }),
                /* @__PURE__ */ jsx152("span", { className: "text-xs text-zinc-400 hidden group-hover:inline transition-opacity", children: "Attach" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs125("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs125(
              "button",
              {
                type: "button",
                className: "px-2 py-1 rounded-lg text-sm text-zinc-400 transition-colors border border-dashed border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 flex items-center justify-between gap-1",
                children: [
                  /* @__PURE__ */ jsx152(PlusIcon, { className: "w-4 h-4" }),
                  "Project"
                ]
              }
            ),
            /* @__PURE__ */ jsxs125(
              "button",
              {
                type: "button",
                className: cn(
                  "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 flex items-center justify-between gap-1",
                  value.trim() ? "bg-white text-black" : "text-zinc-400"
                ),
                children: [
                  /* @__PURE__ */ jsx152(
                    ArrowUpIcon,
                    {
                      className: cn(
                        "w-4 h-4",
                        value.trim() ? "text-black" : "text-zinc-400"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx152("span", { className: "sr-only", children: "Send" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx152("div", { className: "mt-4 -mx-4 px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxs125("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 sm:overflow-x-auto sm:pb-2 sm:justify-center scrollbar-hide", children: [
        /* @__PURE__ */ jsx152(
          ActionButton,
          {
            icon: /* @__PURE__ */ jsx152(ImageIcon, { className: "w-4 h-4" }),
            label: "Clone a Screenshot"
          }
        ),
        /* @__PURE__ */ jsx152(
          ActionButton,
          {
            icon: /* @__PURE__ */ jsx152(Figma2, { className: "w-4 h-4" }),
            label: "Import from Figma"
          }
        ),
        /* @__PURE__ */ jsx152(
          ActionButton,
          {
            icon: /* @__PURE__ */ jsx152(FileUp2, { className: "w-4 h-4" }),
            label: "Upload a Project"
          }
        ),
        /* @__PURE__ */ jsx152(
          ActionButton,
          {
            icon: /* @__PURE__ */ jsx152(MonitorIcon, { className: "w-4 h-4" }),
            label: "Landing Page"
          }
        ),
        /* @__PURE__ */ jsx152(
          ActionButton,
          {
            icon: /* @__PURE__ */ jsx152(CircleUserRound, { className: "w-4 h-4" }),
            label: "Sign Up Form"
          }
        )
      ] }) })
    ] })
  ] });
}
function ActionButton({ icon, label }) {
  return /* @__PURE__ */ jsxs125(
    "button",
    {
      type: "button",
      className: "flex items-center gap-2 w-full sm:w-auto px-3 sm:px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-colors whitespace-nowrap flex-shrink-0",
      children: [
        icon,
        /* @__PURE__ */ jsx152("span", { className: "text-xs", children: label })
      ]
    }
  );
}
export {
  AuthForm,
  BackgroundCircles,
  Btn14,
  CartDrawer,
  Checkmark,
  ErrorGeneration,
  FormGeneration,
  Header,
  HeaderGeneration,
  MultimodalInput,
  Preview,
  ProductGrid,
  ProductModal,
  SettingsGeneration,
  SocialLogin,
  Toolbar,
  TopBar,
  VercelV0Chat
};
//# sourceMappingURL=index.mjs.map