const express = require('express');
const temperatureController = require('../../controller/temperatureController');
const router = new express.Router();

/**
 * @openapi
 * /api/v1/temperature:
 *   get:
 *    description: Get Temperatures
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/', temperatureController.getAllTemperatures);

/**
 * @openapi
 * /api/v1/temperature/{beerId}:
 *  get:
 *    description: Get Temperature
 *    parameters:
 *    - in: path
 *    name: beerId
 *    required: true
 *    type: integer
 *    responses:
 *      200:
 *        description: Success
 *
 */
router.get('/:beerId', temperatureController.getOneTemperature);

module.exports = router;
