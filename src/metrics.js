const Prometheus = require('prom-client');

const requestCount = new Prometheus.Counter({
  name: 'http_requests_total',
  help: 'Counter for total requests received',
  labelNames: ['route', 'method', 'status'],
});

/**
 * @param {!Array} buckets - array of numbers, representing the buckets for
 * request duration
 */
function requestDurationGenerator (buckets) {
  return new Prometheus.Histogram({
    name: 'http_requests_duration_milliseconds',
    help: 'Duration of HTTP requests in milliseconds',
    labelNames: ['route', 'method', 'status'],
    buckets,
  });
}

module.exports = {
  requestCount,
  requestDurationGenerator,
};