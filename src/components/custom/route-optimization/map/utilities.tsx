import { mapDefaults } from '@/lib/types/constants'
import { MapProps } from '@/lib/types/route-optimization'
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export default function MapUtilities({ card }: MapProps) {
    const map = useMap()
    useEffect(() => {
        map.setView(card.journey.route[0], mapDefaults.zoom)
    }, [card])
    return (
        <></>
    )
}
