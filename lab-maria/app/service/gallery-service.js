'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('Gallery Service');

    let service = {};
    service.galleries = [];

    service.createGallery = (gallery) => {
      $log.debug('service.createGallery');
      let url = `http://localhost:3000/api/gallery`;
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        return $http.post(url, gallery, config);
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
      let url = `http://localhost:3000/api/gallery`;
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.get(url, config);
      })
      .then(res => {
        $log.log('galleries retrieved');
        service.galleries = res.data;
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        $q.reject(err);
      });
    };

    service.deleteGallery = (galleryid) => {
      $log.debug('#service.deleteGallery');
      let url = `http://localhost:3000/api/gallery/${galleryid}`;
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.delete(url, config);
      })
      .then(res => {
        service.galleries.filter((ele, i) => {
          if(ele._id === galleryid) service.galleries.splice(i, 1);
        });
        return res;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    service.updateGallery = (gallery, galleryid) => {
      $log.debug('#service.updateGallery');
      let url = `http://localhost:3000/api/gallery/${galleryid}`;
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.put(url, gallery, config);
      })
      .then(res => {
        service.galleries.forEach((ele, idx) => {
          if(ele._id === res.data._id) service.galleries[idx] = res.data;
        });
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    return service;
  },
];
