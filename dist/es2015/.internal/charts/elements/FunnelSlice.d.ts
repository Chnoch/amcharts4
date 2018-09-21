/**
 * Module that defines everything related to building FunnelSlices.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Container, IContainerProperties, IContainerAdapters, IContainerEvents } from "../../core/Container";
import { Sprite } from "../../core/Sprite";
import { Percent } from "../../core/utils/Percent";
import { Orientation } from "../../core/defs/Orientation";
import { IPoint } from "../../core/defs/IPoint";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[FunnelSlice]].
 */
export interface IFunnelSliceProperties extends IContainerProperties {
    /**
     * Width of the top edge of the slice.
     *
     * @type {number | Percent}
     */
    topWidth?: number | Percent;
    /**
     * Width of the bottom edge of the slice.
     *
     * @type {number | Percent}
     */
    bottomWidth?: number | Percent;
    /**
     * A relative distance slice's sides should be bent to.
     *
     * @default 0
     * @type {number}
     */
    expandDistance?: number;
    /**
     * Orientation of the slice.
     *
     * @type {Orientation}
     */
    orientation?: Orientation;
}
/**
 * Defines events for [[FunnelSlice]].
 */
export interface IFunnelSliceEvents extends IContainerEvents {
}
/**
 * Defines adapters for [[FunnelSlice]].
 *
 * @see {@link Adapter}
 */
export interface IFunnelSliceAdapters extends IContainerAdapters, IFunnelSliceProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Class used to create [[FunnelSlice]] elements.
 *
 * @see {@link IFunnelSliceEvents} for a list of available events
 * @see {@link IFunnelSliceAdapters} for a list of available adapters
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/funnel-chart/} for documentation
 * @important
 */
export declare class FunnelSlice extends Container {
    /**
     * Defines available properties.
     *
     * @type {IFunnelSliceProperties}
     */
    _properties: IFunnelSliceProperties;
    /**
     * Defines available adapters.
     *
     * @type {IFunnelSliceAdapters}
     */
    _adapter: IFunnelSliceAdapters;
    /**
     * Defines available events.
     *
     * @type {IFunnelSliceEvents}
     */
    _events: IFunnelSliceEvents;
    /**
     * Main slice element.
     *
     * @type {Sprite}
     */
    slice: Sprite;
    /**
     * Am anchor point the slice tick line is pointing to.
     *
     * @ignore Exclude from docs
     * @readonly
     */
    tickPoint: IPoint;
    /**
     * Constructor
     */
    constructor();
    /**
     * Draws the element.
     */
    protected draw(): void;
    /**
     * @return {number} bottom width
     */
    /**
     * Bottom width in pixels or percent.
     *
     * IMPORTANT: this setting might be used to set dimensions if you use slice
     * as a standalone element. If it's a part of [[FunnelSeries]] this setting
     * becomes read-only as it will be automatically reset by series.
     *
     * @param {number}  value  Bottom width
     */
    bottomWidth: number | Percent;
    /**
     * @return {number} Top width
     */
    /**
     * Top width in pixels or percent.
     *
     * IMPORTANT: this setting might be used to set dimensions if you use slice
     * as a standalone element. If it's a part of [[FunnelSeries]] this setting
     * becomes read-only as it will be automatically reset by series.
     *
     * @param {number}  value  Top width
     */
    topWidth: number | Percent;
    /**
     * @return {Orientation} Orientation
     */
    /**
     * Orientation of the funnel slice: "horizontal" or "vertical".
     *
     * IMPORTANT: this setting might be used to set orintation if you use slice
     * as a standalone element. If it's a part of [[FunnelSeries]] this setting
     * becomes read-only as it will be automatically reset by series.
     *
     * @param {Orientation}  value  Orientation
     */
    orientation: Orientation;
    /**
     * @return {number} expandDistance
     */
    /**
     * A relative distance slice's sides should be bent to. It's relative to the
     * height of the slice.
     *
     * Zero (default) will mean the sides will be perfectly straight.
     *
     * Positive value will make them bend outwards, resulting in "puffed" slices.
     *
     * Negative values will make them bend inwards.
     *
     * @default 0
     * @param {number}
     */
    expandDistance: number;
}