/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
   this.carTypeEnum = {
    big: 1,
    medium: 2,
    small: 3,
   }
   this.ParkingStore = {}
   this.ParkingStore[this.carTypeEnum.big] = big
   this.ParkingStore[this.carTypeEnum.medium] = medium
   this.ParkingStore[this.carTypeEnum.small] = small
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  const carType_Enum = Object.values(this.carTypeEnum)
  if(carType_Enum.indexOf(carType > -1)) {
    if(this.ParkingStore[carType] > 0) {
      this.ParkingStore[carType] --
      return true
    }
    return false
  }
  return false
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
