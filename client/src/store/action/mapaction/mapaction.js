import {MAPLOCATIONS} from '../types/types'
export function getMapState(data) {
    return {
        type: MAPLOCATIONS,
        data
    }
}