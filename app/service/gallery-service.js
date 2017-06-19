'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'authservice',
  function($q, $log, $http, authservice) {
    $log.debug(' Gallery service');

    let service = {};
    service.galleries = [];

    service.createGallery = (gallery) => {
      $log.debug('service.createGallery');
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        return $http.post(`${__API_URL__}/api/gallery`, gallery, config);
      })
      .then(res => {
        $log.log('gallery created');
        let gallery = res.data;
        service.galleries.unshift(gallery);
        return gallery;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    service.fetchGalleries = () => {
      $log.debug('#service.fetchGalleries');
      return authservice.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        return $http.get(`${__API_URL__}/api/gallery`, config);
      })
      .then(res => {
        $log.log('galleries getted');
        service.galleries = res.data;
        return res.data;
      });
    };
    return service;
  }
];
