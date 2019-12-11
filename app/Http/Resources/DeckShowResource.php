<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DeckShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'lang_source' => $this->lang_source,
            'lang_target' => $this->lang_source,
            'slug' => $this->slug,
            'cards' => CardResource::collection($this->cards),
        ];
    }
}
