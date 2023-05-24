const { createGuest, getGuestByGuestId, getGuests, updateGuest, deleteGuest} = require('./guest.controller');
const router = require('express').Router();

router.post('/', createGuest);
router.get('/:guest_id', getGuestByGuestId);
router.get('/', getGuests);
router.patch('/:guest_id', updateGuest);
router.delete('/',deleteGuest);

module.exports = router;